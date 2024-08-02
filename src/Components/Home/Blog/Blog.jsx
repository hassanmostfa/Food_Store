import React from 'react'
import './blog.css'
import {blog} from '../../Data/Data'
import Heading from '../../Common/Heading'
import { Link } from 'react-router-dom'
const Blog = () => {
    return (
        <div className="blogs">
            <div className="container">
                <div className="heading" style={{textAlign: 'center'}}>
                    <Heading title="LATEST NEWS & BLOG" subtitle="Recent Article"/>
                </div>
                <div className="blogs">
                    {blog.map((item) => (
                        <div className="blog" key={item.id}>
                            <div className="content">
                                <span>{item.date}</span>
                                <p>{item.name}</p>
                            </div>
                            <div className="image">
                                <img src={item.cover} alt="blog" />
                            </div>
                            <div className="learn_more">
                                <i class="fa-solid fa-arrow-right-long"></i>
                                <Link href="#">LEARN MORE</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog