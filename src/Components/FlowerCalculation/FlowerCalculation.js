import React from 'react';

const FlowerCalculation = ({card}) => {
    const {name}=card
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default FlowerCalculation;