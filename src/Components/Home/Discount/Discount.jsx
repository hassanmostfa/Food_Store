import React from 'react'
import './Discount.css'
import Heading from '../../Common/Heading'

    const Discount = () => {
    return (
        <div className='discount'>
            <div className="container">
                <div className="text col-sm-6">
                    <Heading subtitle="Special Kombo Pack" title="WE MAKE THE BEST * BURGER IN YOUR TOWN"
                    />
                    <p>
                        As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat. advice you to call us of before arriving As well known and we are very busy all days advice you
                    </p>
                    <div className="discount_end">
                        <button className='green_btn'>ORDER NOW</button>
                        <h1>54.99$  <sub>69.99$</sub></h1>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Discount