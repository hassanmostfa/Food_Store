import React from 'react'
import Heading from '../../Common/Heading'
import {menu} from '../../Data/Data'
import './Menu.css'
const Menu = () => {
  return (
    <div>
        <div style={{textAlign: 'center'}}>
        <Heading title="WENT TO EAT?" subtitle="Our Popular Menu"/>
        </div>

        <div className="menu">
            {
                menu.map((item) => {
                    return (
                        <div className="menu_item" key={item.id}>
                            <div className="card_header">
                                <span>{item.icon}</span>
                                <h1>0{item.id}</h1>
                            </div>
                            <div className="text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="image">
                                <img src={item.cover} alt="menu" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Menu