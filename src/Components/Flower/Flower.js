import React from 'react';
import './Flower.css'

const Flower = (props) => {
    const { name, picture, price } = props.flower
    const { addHandleClick } = props
    return (
        <div>
            <div className='flower-container'>
                <img src={picture} alt="" />
                <h2 >{name}</h2>
                <h3 >{price}</h3>
                <button onClick={() => addHandleClick(props.flower)}>Add me</button>
            </div>
        </div>
    );
};

export default Flower;