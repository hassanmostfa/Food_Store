import React from 'react'
import './team.css'
import {team} from '../../Data/Data'
import Heading from '../../Common/Heading'
const Team = () => {
    return (
        <div className='team'>
            <div className="container">
                {/* Section Header */}
                <div style={{textAlign: 'center'}}>
                    <Heading subtitle="Our Professional" title="Meet Our Stuff"/>
                </div>

                {/* Team */}
                <div className="cards">
                    {team.map((item) => (
                        <div className="card" key={item.id}>
                            <div className="image">
                                <img src={item.cover} alt="team" />
                            </div>
                                <div className="info">
                                    <h3>{item.name}</h3>
                                    <span>{item.exper}</span>
                                </div>
                                <div className="socials">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team