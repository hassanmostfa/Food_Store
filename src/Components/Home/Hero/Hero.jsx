    import React from 'react'
    import './Hero.css'
    const Hero = () => {
    return (
        <div className="hero">
            <div className="content col-sm-6">
                <div className="text">
                    <h3 className='subtitle'>Medium 2-topping*Burgers</h3>
                    <h1 className='title'>Are you <br /> hungry?</h1>
                    <p>As well known and we are very busy all days advice <br /> you. advice you call us of before arriving.
                    </p>
                    <button className='btn1'>Our Menu</button>
                    <button className='btn2'>Learn More</button>
                </div>
                <div className="social_links">
                    <div>
                        <i className="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                    </div>
                    <div>
                        <i className="fab fa-youtube"></i>
                        <span>Youtube</span>
                    </div>
                    <div>
                        <i className="fab fa-twitter"></i>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>

            <div className="image col-sm-4">
                <img src="../images/hero.png" alt="hero" />
            </div>

        </div>
    )
    }

    export default Hero