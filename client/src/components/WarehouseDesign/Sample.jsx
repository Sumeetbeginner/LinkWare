
import React, { useState } from 'react';
import './design.css';
import aisle from '../../assets/images/aisle.png';

const Warehouse = () => {
    const [aisleCount, setAisleCount] = useState(0);
    const [numShelves, setNumShelves] = useState(0);
    const [numRacks, setNumRacks] = useState(0);
    const [width, setWidth] = useState(100);
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [rotation, setRotation] = useState(0); // Rotation angle in degrees

    const handleAisle = () => {
        // Logic to add an aisle
        setAisleCount(aisleCount + 1);
        createAisleBox();
    };

    const createAisleBox = () => {
        const aisleBox = document.createElement('div');
        aisleBox.className = 'aisleBox';

        // Set styles
        aisleBox.style.width = `${width}px`;
        aisleBox.style.height = `${numShelves * 10}px`; // Assuming each shelf is 10px in height
        aisleBox.style.left = `${posX}px`;
        aisleBox.style.top = `${posY}px`;
        aisleBox.style.transform = `rotate(${rotation}deg)`;

        // Append to the warehouse design container
        const wareHouseDesign = document.querySelector('.wareHouseDesign');
        wareHouseDesign.appendChild(aisleBox);

        // Scroll to the newly added aisle box
        aisleBox.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    };


    const handleShelvesChange = (e) => {
        setNumShelves(parseInt(e.target.value));
        updateAisle();
    };

    const handleRacksChange = (e) => {
        setNumRacks(parseInt(e.target.value));
        updateAisle();
    };

    const handleWidthChange = (e) => {
        setWidth(parseInt(e.target.value));
        updateAisle();
    };

    const handlePosXChange = (e) => {
        setPosX(parseInt(e.target.value));
        updateAisle();
    };

    const handlePosYChange = (e) => {
        setPosY(parseInt(e.target.value));
        updateAisle();
    };

    const handleRotationChange = (e) => {
        setRotation(parseInt(e.target.value));
        updateAisle();
    };

    const updateAisle = () => {
        // Update the existing aisle box
        const aisleBox = document.querySelector('.aisleBox');
        if (aisleBox) {
            aisleBox.style.width = `${width}px`;
            aisleBox.style.height = `${numShelves * 5}px`;
            aisleBox.style.left = `${posX}px`;
            aisleBox.style.top = `${posY}px`;
            aisleBox.style.transform = `rotate(${rotation}deg)`;
        }
    };

    return (
        <>
            <div className="flexDes">
                <div className="wareHouseDesign">
                    {/* Render the aisle box here */}

                </div>
                <div className="wareHouseComponents">


                    <img src={aisle} alt="" />

                    <input
                        type="number"
                        value={numShelves}
                        onChange={handleShelvesChange}
                        placeholder="Enter Number of Shelves in Aisle"
                    />


                    <button onClick={handleAisle}>Add Aisle</button>

                    {/* Custom tab with input fields and sliders */}
                    <div className="updateBox">

                        <input
                            type="number"
                            value={numRacks}
                            onChange={handleRacksChange}
                            placeholder="Enter Number of Racks in Aisle"
                        />
                        {/* Remove width input */}
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={posX}
                            onChange={handlePosXChange}
                        />
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={posY}
                            onChange={handlePosYChange}
                        />
                        {/* Slider for rotation angle */}
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={rotation}
                            onChange={handleRotationChange}
                        />

                        <button onClick={updateAisle}>
                            Update Aisle
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Warehouse;
