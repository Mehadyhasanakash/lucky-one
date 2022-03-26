import React, { useEffect, useState } from 'react';
import Flower from '../Flower/Flower';
import FlowerCalculation from '../FlowerCalculation/FlowerCalculation';
import './Flowers.css'

const Flowers = () => {

    const [flowers, setFlowers] = useState([])
    const [cards, setCard] = useState([])
    const [random, setRandom] = useState([]);

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
  const randomProduct = () => {
    let item = cards[Math.floor(Math.random() * cards.length)];
    setRandom(item)
    setCard([random])
    
  }
  const deletButonn = ()=>{
      setRandom([])
      
  }


  
    
    return (
        <div className='row flowers-container'>

            <div className='flowers-grid col-sm-6'>
                {
                    flowers.map(flower => <Flower
                        key={flower.id}
                        flower={flower}
                        addHandleClick={addHandleClick}

                    ></Flower>)
                }
            </div>

            <div className='flower-calculation col-sm-6'>
             <FlowerCalculation key={cards.id} cards={cards} random={random.name} randomHendle ={randomProduct} deletButonn={deletButonn}></FlowerCalculation>
                
            
            </div>


        </div>


    );
};

export default Flowers;