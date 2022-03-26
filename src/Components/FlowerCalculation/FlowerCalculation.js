import React from 'react';

const FlowerCalculation = (props) => {
    const {cards} =props;
    

    return (
        <div>
            <h1>Choose your flower</h1>
            {
                cards.map(card => <h1>{card.name}</h1>)
            }

            <button>Choose your flower</button>

        </div>
    );
};

export default FlowerCalculation;