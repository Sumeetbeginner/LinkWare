
import React from 'react'
import scanp from '../../assets/images/qrcode.png'

const HomeW = () => {
  return (
    <div className='homePage'>
        <div className="workerTasks">
            <div className="scanProduct taskBox">
                <img src={scanp} alt="" />
            </div>

        </div>

        <div className="workerData">

        </div>
    </div>
  )
}

export default HomeW