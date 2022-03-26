

import React, { useEffect, useState } from 'react';
import Flower from '../Flower/Flower';
import './Flowers.css'

const Flowers = () => {

    const [flowers, setFlowers] = useState([])
    const [cards, setCard] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFlowers(data));
    }, [])

    const addHandleClick = (flower) => {
        const newFlower = [...cards, flower]
        setCard(newFlower)
    }


    return (
        <div className='flowers-container'>

            <div className='flowers-grid'>
                {
                    flowers.map(flower => <Flower
                        key={flower.id}
                        flower={flower}
                        addHandleClick={addHandleClick}

                    ></Flower>)
                }
            </div>


            <div className='flower-calculation'>
               <h1>Choose you flower</h1>
               {
                cards.map(card => <h1>{card.name}</h1>)
               }
            </div>


        </div>


    );
};

export default Flowers;