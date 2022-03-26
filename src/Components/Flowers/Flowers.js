

import React, { useEffect, useState } from 'react';
import Flower from '../Flower/Flower';
import './Flowers.css'

const Flowers = () => {

    const [flowers, setFlowers] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFlowers(data));
    }, [])

    const addHandleClick = (flower) => {
        const newFlower = [...card, flower]
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
                 <h1>this is me</h1>
             </div>


               </div>
             
    
    );
};

export default Flowers;