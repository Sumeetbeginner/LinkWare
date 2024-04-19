
import React, { useState } from 'react'
import ill1 from '../../assets/logo/ill1.png'
import ill2 from '../../assets/logo/ill2.png'
import ill3 from '../../assets/logo/ill3.png'
import { useNavigate } from 'react-router-dom'
import './startup.css'
import './mstartup.css'

const Startup = () => {

    const [stepCount, setStepCount] = useState(1)
    const location = useNavigate();

    const incrementStep = () => {

        if (stepCount <= 2) {
            setStepCount(stepCount + 1);
            stepFunction()
            document.getElementById('nextButton').innerHTML = 'Next'
        }

        if (stepCount == 2) {
            document.getElementById('nextButton').innerHTML = 'Register'

        }

        if (stepCount == 3) {
            location('/registration')
        }

    }

    const decrementStep = () => {
        if (stepCount > 1) {
            setStepCount(stepCount - 1);
            stepFunction()
            document.getElementById('nextButton').innerHTML = 'Next'
        }
    }

    const handleEmailClick = () => {
        window.location.href = 'mailto:sumeetgupta3690@gmail.com'
    }

    const stepFunction = () => {

        switch (stepCount) {
            case 1:
                return (
                    <>
                        <div className="illChild">
                            <img src={ill1} alt="" />
                            <p>
                            The Warehouse Management System automates tasks for better space optimization and utilization, ensuring efficient storage and retrieval of inventory</p>
                        </div>
                    </>
                )
            case 2:
                return (
                    <>
                        <div className="illChild">
                            <img src={ill2} alt="" />
                            <p>
                            Through intuitive user interfaces and robust backend algorithms, our system leverages AI to automate inventory processes, enhancing accuracy and reducing manual effort</p>
                        </div>
                    </>
                )
            case 3:
                return (
                    <>
                        <div className="illChild">
                            <img src={ill3} alt="" />
                            <p>
                            With comprehensive reporting and analytics, stakeholders gain valuable insights into inventory trends and warehouse performance, facilitated by IoT integrations for seamless management of inventory items</p>
                        </div>
                    </>
                )
        }

    }


    return (
        <>
            <div className="introContainer">
                <div className="upperFlex">
                    <h1>Welcome To Link Ware !!!</h1>
                    <p onClick={handleEmailClick} ><i className="fa-solid fa-envelope"></i> </p>
                </div>
                {stepFunction()}

                <div className="routeBtn">

                    <button className='prevBtn' onClick={decrementStep}>Previous</button>
                    <button className='nextBtn' id='nextButton' onClick={incrementStep}>Next</button>

   </div>
            </div>
        </>
    )
}

export default Startup