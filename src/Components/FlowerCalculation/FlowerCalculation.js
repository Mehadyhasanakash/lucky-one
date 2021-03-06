import React from 'react';

const FlowerCalculation = (props) => {
    const {cards, randomHendle, deletButonn, random} =props;

    return (
        <div>
            <h1>Choose your flower</h1>
            {
                cards.map(card => <h1 className='p-3 mb-2 bg-success text-white'>{card.name}</h1>)
            }
            
            <h1 className='p-3 mb-2 bg-danger text-white'>{random}</h1>
            <button onClick={()=> randomHendle()} className='button'>Choose your flower</button> <br /> <br />

            <button onClick={()=> deletButonn()} className='button'>clear all data</button>

        </div>
    );
};

export default FlowerCalculation;