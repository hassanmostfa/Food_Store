import React from 'react'
import './download.css'
import Heading from '../../Common/Heading'

const Download = () => {
    return (
        <div className='download'>
            <div className="container">
                <div className="app_img col-sm-6">
                    <img src="../images/cta_app.png" alt="app" />
                </div>
                <div className="right_row col-sm-6">
                    <Heading
                        title="BEST APP FOR FOOD DELIVERY"
                        subtitle="Download App"
                    />
                    <div className="sources">
                        <img src="../images/d1.png" alt="" />
                        <img src="../images/d2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download