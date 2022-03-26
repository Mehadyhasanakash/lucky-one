import React from 'react';
import './Flower.css'

const Flower = (props) => {
    const { name, picture, price } = props.flower
    const { addHandleClick } = props
    return (
        <div>
            <div className='flower-container'>
                <img src={picture} alt="" />
                <h2 className='text-center' >{name}</h2>
                <h3 className='text-center' >{price}</h3>
                <button className='btn-Click' onClick={() => addHandleClick(props.flower)}>Buy Now</button>
            </div>

        
        </div>
    );
};

export default Flower;