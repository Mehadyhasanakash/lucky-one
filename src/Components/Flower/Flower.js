import React from 'react';
import './Flower.css'

const Flower = (props) => {
    console.log(props.flower)
    const {name,picture,price} = props.flower
    return (
        <div>
            <div className='flower-container'>
            <img src={picture} alt="" />
            <h2 >{name}</h2>
            <h3 >{price}</h3>
            <button>Add me</button>
            </div>
        </div>
    );
};

export default Flower;