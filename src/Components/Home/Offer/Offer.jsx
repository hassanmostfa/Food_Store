import React from 'react'
import Heading from '../../Common/Heading'
import './Offer.css'

const offer = () => {
return (
    <div className='offer'>
        <div className="content col-sm-6">
            <Heading 
            title="GOOD FOOD, DRINKS & GREAT COMPANY."
            subtitle="Special Offer"
            />
            <p>As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat. advice you to call us of before arriving As well known and we are very busy all days advice you.
            </p>

            <div className="offer_end">
                <button>ORDER NOW</button>
                <h1>54.99$</h1>
            </div>
        </div>
        <div className="image col-sm-6">
            <img src="../images/offer_img.png" alt="offer" />
        </div>
    </div>
)
}

export default offer