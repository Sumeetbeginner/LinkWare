import React, { useState, useEffect } from 'react';
import './authentication.css';
import worker from '../../assets/logo/worker.png';
import manager from '../../assets/logo/manager.png';
import { useNavigate } from 'react-router-dom'
import { auth, database } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set, } from 'firebase/database';

const Registration = () => {
    const [userType, setUserType] = useState('');
    const [noUserType, setNoUserType] = useState('');
    const [stepNo, setStepNo] = useState(1);

    // Worker Data
    const [workerName, setWorkerName] = useState('')
    const [workerGender, setWorkerGender] = useState('')
    const [emailW, setEmailW] = useState('')
    const [passwordW, setPasswordW] = useState('')
    const [warehouseCode, setWarehouseCode] = useState('')
    const [workerId, setWorkerId] = useState('')

    // Warehouse/Manager Data
    const [warehouseName, setWareHouseName] = useState('')
    const [warehouseLoc, setWareHouseLoc] = useState('')
    const [workersCount, setWorkersCount] = useState('')
    const [warehouseCodeM, setWarehouseCodeM] = useState('')
    const [emailM, setEmailM] = useState('')
    const [passwordM, setPasswordM] = useState('')

    const location = useNavigate()

    const handleRegistration = async () => {

        try {
            if (userType == "Worker") {                
                const userCredential = await 
                
                createUserWithEmailAndPassword(auth, emailW, passwordW);
                const newUser = userCredential.user;
    
                const userRef = ref(database, 'workers/' + newUser.uid);
              
    
                await set(userRef, {
                    userType: "worker",
                    workerName: workerName,
                    workerGender: workerGender,
                    workerEmail: emailW,
                });

            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, emailM, passwordM);
                const newUser = userCredential.user;
    
                const insRef = ref(database, 'warehouse/' + newUser.uid);

    
                await set(insRef, {
                    userType: "manager",
                    warehouseName: warehouseName,
                    warehouseLoc: warehouseLoc,
                    companyEmail: emailM,
                    workerCount: workersCount,
                    warehouseCode : warehouseCode
    
                });
            }
    
            alert('✅ Registered Successfully');
            location('/login');
        } catch (error) {
            alert('Registration error:', error.message);
            console.log(error);
        }
    };
    

    const changeUserType = (input, input2) => {
        setUserType(input);
        setNoUserType(input2)
    };


    const changePath = (path) => {
        location('/' + path)
    }

    const handleNext = () => {
        if (stepNo < 3) {
            setStepNo(stepNo + 1);
        }
    }
    const handlePrev = () => {
        if (stepNo > 1) {
            setStepNo(stepNo - 1);
        }
    }

    const renderContent = () => {

        switch (stepNo) {
            case 1:
                return (
                    <>
                        <h2 className='h11'>Select User Type</h2>

                        <div className='userL'>

                            <img onClick={() => changeUserType('Worker', 'Manager')} id='worker' src={worker} alt='worker' />
                            <img onClick={() => changeUserType('Manager', 'Worker')} id='manager' src={manager} alt='manager' />
                        </div>

                        <h3 id='userTypeD'></h3>


                    </>
                )

            case 2:
                if (userType === 'Worker') {
                    return (
                        <>  <h2 className='stdH'>Worker Details</h2>

                            <input placeholder='Worker Name' className='inp' type="text" value={workerName} onChange={(e) => setWorkerName(e.target.value)} />

                            <select value={workerGender} onChange={(e) => setWorkerGender(e.target.value)} className='slct' name="gender">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                            </select>

                            <input placeholder='Worker ID' className='inp' type="text" value={workerId} onChange={(e) => setWorkerId(e.target.value)} />
                        </>

                    );
                }
                else {
                    return (
                        <>
                            <h2 className='stdH'>Warehouse Details</h2>

                            <input value={warehouseName} onChange={(e) => setWareHouseName(e.target.value)} placeholder='Warehouse Name' className='inp' type="text" />

                            <input value={warehouseLoc} onChange={(e) => setWareHouseLoc(e.target.value)} placeholder='Warehouse Location' className='inp' type="text" />

                            <input value={warehouseCodeM} onChange={(e) => setWarehouseCodeM(e.target.value)} placeholder='Create a Warehouse Code' className='inp' type="password" />
                        </>
                    )
                }

            case 3:
                if (userType === 'Worker') {
                    return (
                        <>
                            <h2 className='step3h'>
                                Verification     </h2>
                            <input className='inp' type="text" value={emailW} onChange={(e) => setEmailW(e.target.value)} placeholder='Enter a Email ID' />

                            <input className='inp' value={passwordW} onChange={(e) => setPasswordW(e.target.value)} type="password" placeholder='Create a Password' id="" />

                            <p className='uploadId'>Upload Worker ID</p>
                            <input className='inp' type="file" id="" />

                            <button className='btnR' onClick={handleRegistration}>Register</button>

                        </>
                    );
                }
                else {
                    return (
                        <>
                            <h2 className='step3h'>
                                Verification     </h2>
                            <input className='inp' type="text" value={emailM} onChange={(e) => setEmailM(e.target.value)} placeholder='Company Email ID' />

                            <input className='inp' value={passwordM} onChange={(e) => setPasswordM(e.target.value)} type="password" placeholder='Create a Password' id="" />

                            <p className='uploadId'>Upload Warehouse Document</p>
                            <input className='inp' type="file" id="" />

                            <button className='btnR' onClick={handleRegistration}>Register</button>


                        </>
                    )
                }
            default:
                return null;
        }
    }

    useEffect(() => {
        document.getElementById('userTypeD').innerHTML = userType;

        const element = document.getElementById(userType);
        const element2 = document.getElementById(noUserType)

        if (element) {
            element.style.backgroundColor = 'var(--material)';
            element2.style.backgroundColor = 'var(--light)'
        }
    }, [userType]);

    return (


        <div className='regBg'>
            <div className='regBox'>
                <div className='steps'>
                    <i className={`fa-solid fa-1${stepNo === 1 ? ' active' : ''}`} id='step1'></i>
                    <hr />
                    <i className={`fa-solid fa-2${stepNo === 2 ? ' active' : ''}`} id='step2'></i>
                    <hr />
                    <i className={`fa-solid fa-3${stepNo === 3 ? ' active' : ''}`} id='step3'></i>
                </div>

                {renderContent()}


                <div className='buttonNext'>
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>

                <p className='alreadyR'>Already Registered?<span onClick={() => changePath('login')}> Login</span> </p>
            </div>
        </div>
    );
};

export default Registration;