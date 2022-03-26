import React, { useEffect, useState } from 'react';
import Flower from '../Flower/Flower';
import FlowerCalculation from '../FlowerCalculation/FlowerCalculation';
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
        if(newFlower.length >=5){
            setCard(cards)
            alert('do not have choose')
        }
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
             <FlowerCalculation cards={cards}></FlowerCalculation>
                
            
            </div>


        </div>


    );
};

export default Flowers;