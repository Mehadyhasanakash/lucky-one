import React from 'react';

const FlowerCalculation = (props) => {
    const {name}=props.card
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default FlowerCalculation;