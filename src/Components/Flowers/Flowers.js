

import React, { useEffect, useState } from 'react';
import Flower from '../Flower/Flower';
import './Flowers.css'

const Flowers = () => {

    const [flowers, setFlowers] = useState([])
    const [card, setCard] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFlowers(data));
    } ,[])

    const addHandleClick =(flower)=>{
        const newFlower =[...card, flower]
        setCard(newFlower)
    }


    return (
        <div>
            <h1 className='text-success text-center mt-5'>"Life is the flower for which love is honey"</h1>
            <h3 className='text-danger text-center mt-3'>Please Choose Flower</h3>

            <div className='grid-container'>
                <div className='grid-flower'>
                {
                    flowers.map(flower => <Flower
                        key={flower.id}
                        flower={flower}
                        addHandleClick={addHandleClick}
                    
                    ></Flower>)
                }
                </div>


                <div className='flower-right-side' >
                <h1>this ies</h1>
                <h2>card:{card.length}</h2>
                </div>
                
                 
            </div>
            
           
        </div>
    );
};

export default Flowers;