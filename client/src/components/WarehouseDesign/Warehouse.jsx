
import React, { useState, useEffect } from 'react'
import './design.css'
import aisle from '../../assets/images/aisle.png'
import room from '../../assets/images/room.png'
import fridge from '../../assets/images/fridge.png'
import heater from '../../assets/images/heater.png'

const Warehouse = () => {

    let [aisleCount, setAisleCount] = useState(0)
    let [roomCount, setRoomCount] = useState(0)
    let [fridgeC, setFridgeC] = useState(0)
    let [heaterC, setHeaterC] = useState(0)
    let [fridgeT, setFridgeT] = useState(0)
    let [heaterT, setHeaterT] = useState(0)
    let [fridgeS, setFridgeS] = useState(0)
    let [heaterS, setHeateS] = useState(0)

    // setInterval(() => {
    //     console.log(mapData);
    // }, 5000);
    
    const [roomName, setRoomName] = useState('')

    const [numShelves, setNumShelves] = useState()
    const [numRacks, setNumRacks] = useState()
    let [mapData, setMapData] = useState([])

    // const [width, setWidth] = useState(100);
    // const [width, setWidth] = useState(15)
    // const [height, setHeight] = useState(15)

    const [roomSize, setRoomSize] = useState(15)
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [rotation, setRotation] = useState(0);

    const addAisle = () => {
        appendAisle()
        editAisle()
    }
    const addRoom = () => {
        appendRoom()
        editRoom()
    }
    const addFridge = () => {
        appendFridge()
        editFridge()
    }
    const addHeater = () => {
        appendHeater()
        editHeater()
    }

    const appendAisle = () => {

        setAisleCount(Number(aisleCount += 1))
        let aisle = document.createElement('div')
        aisle.className = 'aisle'
        aisle.id = `aisle${aisleCount}`
        aisle.style.backgroundColor = "brown"

        document.getElementById('wareHouseDesign').appendChild(aisle)

    }
    const appendRoom = () => {

        setRoomCount(Number(roomCount += 1))
        let room = document.createElement('div')
        room.className = 'room'
        room.id = `room${roomCount}`
        room.style.backgroundColor = "green"

        document.getElementById('wareHouseDesign').appendChild(room)

    }
    const appendFridge = () => {

        setFridgeC(Number(fridgeC += 1))
        let fridge = document.createElement('div')
        fridge.className = 'fridge'
        fridge.id = `fridge${fridgeC}`
        fridge.style.backgroundColor = "var(--material)"

        document.getElementById('wareHouseDesign').appendChild(fridge)

    }

    const appendHeater = () => {

        setHeaterC(Number(heaterC += 1))
        let heater = document.createElement('div')
        heater.className = 'heater'
        heater.id = `heater${heaterC}`
        heater.style.backgroundColor = "orange"

        document.getElementById('wareHouseDesign').appendChild(heater)

    }

    const editAisle = () => {
        document.getElementById('wareHouseChild').style.display = "none"

        document.getElementById('aisleEdit').style.display = "block"

    }
    const editRoom = () => {
        document.getElementById('wareHouseChild').style.display = "none"

        document.getElementById('roomEdit').style.display = "block"

    }
    const editFridge = () => {
        document.getElementById('wareHouseChild').style.display = "none"

        document.getElementById('fridgeEdit').style.display = "block"

    }
    const editHeater = () => {
        document.getElementById('wareHouseChild').style.display = "none"

        document.getElementById('heaterEdit').style.display = "block"

    }

    const saveAisleData = () => {

        const bhai1 = { "type": "aisle", "id": `aisle${aisleCount}`, "shelves": numShelves, "racks": numRacks, "posX": posX, "posY": posY, "rotation": rotation }

        setMapData(prevObjects => [...prevObjects, bhai1])

        console.log(mapData);

        setNumRacks(0)
        setNumShelves(0)
        setPosX(0)
        setPosY(0)
        setRotation(0)
    }
    const saveRoomData = () => {
        // setMapData(mapData.push([{ "type": "room", "id": `room${roomCount}`, "roomName": roomName, "roomSize": roomSize, "posX": posX, "posY": posY, "rotation": rotation }]))

        const bhai2 = { "type": "room", "id": `room${roomCount}`, "roomName": roomName, "roomSize": roomSize, "posX": posX, "posY": posY, "rotation": rotation }

        setMapData(prevObjects => [...prevObjects, bhai2])

        console.log(mapData);

        setRoomName(0)
        setRoomSize(0)
        setPosX(0)
        setPosY(0)
        setRotation(0)
    }
    const saveFridgeData = () => {

        const bhai3 = { "type": "fridge", "id": `fridge${roomCount}`, "fridgeTemp": fridgeT, "fridgeSize": fridgeS, "posX": posX, "posY": posY, "rotation": rotation }

        setMapData(prevObjects => [...prevObjects, bhai3])

        console.log(mapData);

        setFridgeS(0)
        setFridgeT(0)
        setPosX(0)
        setPosY(0)
        setRotation(0)
    }
    const saveHeaterData = () => {

        const bhai4 = { "type": "heater", "id": `heater${heaterC}`, "heaterTemp": heaterT, "heaterSize": heaterS, "posX": posX, "posY": posY, "rotation": rotation }

        setMapData(prevObjects => [...prevObjects, bhai4])

        console.log(mapData);

        setHeateS(0)
        setHeaterT(0)
        setPosX(0)
        setPosY(0)
        setRotation(0)
    }

    const updateAisleFinal = () => {
        saveAisleData()
        document.getElementById('aisleEdit').style.display = "none"
        document.getElementById('wareHouseChild').style.display = "block"
    }
    const updateRoomFinal = () => {
        saveRoomData()
        document.getElementById('roomEdit').style.display = "none"
        document.getElementById('wareHouseChild').style.display = "block"
    }
    const updateFridgeFinal = () => {
        saveFridgeData()
        document.getElementById('fridgeEdit').style.display = "none"
        document.getElementById('wareHouseChild').style.display = "block"
    }
    const updateHeaterFinal = () => {
        saveHeaterData()
        document.getElementById('heaterEdit').style.display = "none"
        document.getElementById('wareHouseChild').style.display = "block"
    }

    const updateAisle = () => {

        console.log(numShelves);

        let aisleBox = document.getElementById(`aisle${aisleCount}`)
        aisleBox.style.width = `${numShelves * 1.5}%`;
        aisleBox.style.left = `${posX}px`;
        aisleBox.style.top = `${posY}px`;
        aisleBox.style.transform = `rotate(${rotation}deg)`;

        document.getElementById(`aisle${aisleCount}`).innerHTML = `Aisle ${aisleCount} : Shelves ${numShelves} : Racks ${numRacks}`

    }
    const updateRoom = () => {

        let room = document.getElementById(`room${roomCount}`)
        room.style.width = `${roomSize}%`;
        room.style.height = `${roomSize}%`;
        room.style.left = `${posX}px`;
        room.style.top = `${posY}px`;
        room.style.transform = `rotate(${rotation}deg)`;

        document.getElementById(`room${roomCount}`).innerHTML = `${roomName}`

    }
    const updateFridge = () => {

        let fridge = document.getElementById(`fridge${fridgeC}`)
        fridge.style.width = `${fridgeS}%`;
        fridge.style.height = `${fridgeS}%`;
        fridge.style.left = `${posX}px`;
        fridge.style.top = `${posY}px`;
        fridge.style.transform = `rotate(${rotation}deg)`;

        document.getElementById(`fridge${fridgeC}`).innerHTML = `Fridge ${fridgeC} : ${fridgeT} Deg Celsius`

    }
    const updateHeater = () => {

        let heater = document.getElementById(`heater${heaterC}`)
        heater.style.width = `${heaterS}%`;
        heater.style.height = `${heaterS}%`;
        heater.style.left = `${posX}px`;
        heater.style.top = `${posY}px`;
        heater.style.transform = `rotate(${rotation}deg)`;

        document.getElementById(`heater${heaterC}`).innerHTML = `Heater ${heaterC} : ${heaterT} Deg Celsius`

    }

    const handleShelvesChange = (e) => {
        setNumShelves(parseInt(e.target.value));
        updateAisle();
    };

    const handleRacksChange = (e) => {
        setNumRacks(parseInt(e.target.value));
        updateAisle();
    };

    // const handleWidthChange = (e) => {
    //     setWidth(parseInt(e.target.value));
    //     updateAisle();
    // };

    const handlePosXChange = (e) => {
        setPosX(parseInt(e.target.value));
        updateAisle();
    };
    const handlePosXChangeRoom = (e) => {
        setPosX(parseInt(e.target.value));
        updateRoom();
    };
    const handlePosXChangeFridge = (e) => {
        setPosX(parseInt(e.target.value));
        updateFridge();
    };
    const handlePosXChangeHeater = (e) => {
        setPosX(parseInt(e.target.value));
        updateHeater();
    };

    const handleRoomNameChange = (e) => {
        setRoomName(String(e.target.value));
        updateRoom();
    };
    const handleFridgeTemp = (e) => {
        setFridgeT(parseInt(e.target.value));
        updateFridge();
    };
    const handleHeaterTemp = (e) => {
        setHeaterT(parseInt(e.target.value));
        updateHeater();
    };

    const handlePosYChange = (e) => {
        setPosY(parseInt(e.target.value));
        updateAisle();
    };

    const handlePosYChangeRoom = (e) => {
        setPosY(parseInt(e.target.value));
        updateRoom();
    };
    const handlePosYChangeFridge = (e) => {
        setPosY(parseInt(e.target.value));
        updateFridge();
    };
    const handlePosYChangeHeater = (e) => {
        setPosY(parseInt(e.target.value));
        updateHeater();
    };

    const handleRotationChange = (e) => {
        setRotation(parseInt(e.target.value));
        updateAisle();
    };
    const handleRotationChangeRoom = (e) => {
        setRotation(parseInt(e.target.value));
        updateRoom();
    };
    const handleRotationFridge= (e) => {
        setRotation(parseInt(e.target.value));
        updateFridge();
    };
    const handleRotationHeater= (e) => {
        setRotation(parseInt(e.target.value));
        updateHeater();
    };
    const handleRoomSize = (e) => {
        setRoomSize(parseInt(e.target.value));
        updateRoom();
    };
    const handleFridgeSize = (e) => {
        setFridgeS(parseInt(e.target.value));
        updateFridge();
    };

    const handleHeaterSize = (e) => {
        setHeateS(parseInt(e.target.value));
        updateHeater();
    };



    return (
        <>
            <div className="flexDes" id='flexDes'>
                <div id='wareHouseDesign' className="wareHouseDesign">

                </div>
                <div id='wareHouseComponents' className="wareHouseComponents">
                    <div id="wareHouseChild">
                        <img src={aisle} alt="" />
                        <button onClick={addAisle} >Add Aisle</button>

                        <img src={room} alt="" />
                        <button onClick={addRoom}>Add Room</button>

                        <img src={fridge} alt="" />
                        <button onClick={addFridge}>Add Fridge</button>

                        <img src={heater} alt="" />
                        <button onClick={addHeater}>Add Heater</button>
                    </div>

                    <div id="fridgeEdit">
                        <h2>Edit Fridger</h2>

                        <input
                            type="text"
                            id='roomBhai'
                            value={fridgeT}
                            onChange={handleFridgeTemp}
                            placeholder="Enter Fridge Temperature"
                        />
                        <p>Change Size of Fridger</p>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={fridgeS}
                            onChange={handleFridgeSize}
                        />

                        <p>Change Horizontally</p>
                        {/* Remove width input */}
                        <input
                            type="range"
                            min="-1000"
                            max="2000"
                            value={posX}
                            onChange={handlePosXChangeFridge}
                        />

                        <p>Change Vertically</p>
                        <input
                            type="range"
                            min="-100"
                            max="2000"
                            value={posY}
                            onChange={handlePosYChangeFridge}
                        />

                        <p>Rotate</p>
                        {/* Slider for rotation angle */}
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={rotation}
                            onChange={handleRotationFridge}
                        />

                        <button onClick={updateFridgeFinal}>Update Fridger</button>
                    </div>

                    <div id="heaterEdit">
                        <h2>Edit Heater</h2>

                        <input
                            type="text"
                            id='roomBhai'
                            value={heaterT}
                            onChange={handleHeaterTemp}
                            placeholder="Enter Heater Temperature"
                        />
                        <p>Change Size of Heater</p>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={heaterS}
                            onChange={handleHeaterSize}
                        />

                        <p>Change Horizontally</p>
                        {/* Remove width input */}
                        <input
                            type="range"
                            min="-1000"
                            max="2000"
                            value={posX}
                            onChange={handlePosXChangeHeater}
                        />

                        <p>Change Vertically</p>
                        <input
                            type="range"
                            min="-100"
                            max="2000"
                            value={posY}
                            onChange={handlePosYChangeHeater}
                        />

                        <p>Rotate</p>
                        {/* Slider for rotation angle */}
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={rotation}
                            onChange={handleRotationHeater}
                        />

                        <button onClick={updateHeaterFinal}>Update Heater</button>
                    </div>


                    <div id="roomEdit">
                        <h2>Edit Room</h2>

                        <input
                            type="text"
                            id='roomBhai'
                            value={roomName}
                            onChange={handleRoomNameChange}
                            placeholder="Enter Room Name"
                        />
                        <p>Change Size of Room</p>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={roomSize}
                            onChange={handleRoomSize}
                        />

                        <p>Change Horizontally</p>
                        {/* Remove width input */}
                        <input
                            type="range"
                            min="-1000"
                            max="2000"
                            value={posX}
                            onChange={handlePosXChangeRoom}
                        />

                        <p>Change Vertically</p>
                        <input
                            type="range"
                            min="-100"
                            max="2000"
                            value={posY}
                            onChange={handlePosYChangeRoom}
                        />

                        <p>Rotate</p>
                        {/* Slider for rotation angle */}
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={rotation}
                            onChange={handleRotationChangeRoom}
                        />

                        <button onClick={updateRoomFinal}>Update Room</button>
                    </div>

                    <div id="aisleEdit">
                        <h2>Edit Aisle</h2>
                        <img src={aisle} alt="" />

                        <div className="updateBox">

                            <input
                                type="number"
                                id='shelvesNo'
                                value={numShelves}
                                onChange={handleShelvesChange}
                                placeholder="Number of Shelves in Aisle"
                            />

                            <input
                                type="number"
                                id='rackNo'
                                value={numRacks}
                                onChange={handleRacksChange}
                                placeholder="Number of Racks in Aisle"
                            />
                            <p>Change Horizontally</p>
                            {/* Remove width input */}
                            <input
                                type="range"
                                min="-1000"
                                max="2000"
                                value={posX}
                                onChange={handlePosXChange}
                            />

                            <p>Change Vertically</p>
                            <input
                                type="range"
                                min="-100"
                                max="2000"
                                value={posY}
                                onChange={handlePosYChange}
                            />

                            <p>Rotate</p>
                            {/* Slider for rotation angle */}
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={rotation}
                                onChange={handleRotationChange}
                            />

                            <button onClick={updateAisleFinal}>Update Aisle</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Warehouse