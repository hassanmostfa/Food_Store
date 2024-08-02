import React, { useState } from 'react';
import Heading from '../../Common/Heading';
import { dishes } from '../../Data/Data';
import './Dishes.css';
import { useDispatch} from 'react-redux';
import { addToCart as addDishToCart} from '../../../Redux/cartSlice';


const Dishes = () => {

    const [data, setData] = useState(dishes);
    const [activeCategory, setActiveCategory] = useState('ALL');

    const dispatch = useDispatch();

    // Filter items
    const filterItems = (catItem) => {
        const filteredData = dishes.filter((item) => item.category === catItem);
        setData(filteredData);
        setActiveCategory(catItem);
    };

    const showAllItems = () => {
        setData(dishes);
        setActiveCategory('ALL');
    };

    // Add to cart
    const handleAddToCart = ({ id, title, price, cover }) => {
        dispatch(addDishToCart({ id, title, price, cover }));
    };

    return (
        <div className='dishes'>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <Heading subtitle="Popular dishes" title="POPULAR DISHES" />
                </div>

                <div className="buttons_container">
                    <button onClick={showAllItems} className={activeCategory === 'ALL' ? 'active' : ''}>ALL</button>
                    <button onClick={() => filterItems('BURGER')} className={activeCategory === 'BURGER' ? 'active' : ''}>BURGER</button>
                    <button onClick={() => filterItems('PIZZA')} className={activeCategory === 'PIZZA' ? 'active' : ''}>PIZZA</button>
                    <button onClick={() => filterItems('DRINK')} className={activeCategory === 'DRINK' ? 'active' : ''}>DRINK</button>
                    <button onClick={() => filterItems('DESSERT')} className={activeCategory === 'DESSERT' ? 'active' : ''}>DESSERT</button>
                </div>

                <div className="dishes">
                    {data.map((dish) => (
                        <div className="box" key={dish.id}>
                            <div className="img">
                                <img src={dish.cover} alt="dish" />
                            </div>
                            <div className="text">
                                <div className="sub_rate">
                                    <p>{dish.sub}, {dish.category}</p>
                                    <span>{dish.rate}</span>
                                </div>
                                <div className="title_btn">
                                    <h3>{dish.title}</h3>
                                    <button className="green_btn" onClick={() => handleAddToCart(dish)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                                <span className='price'>Price: {dish.price}$</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dishes;
