

import React, { useEffect, useState } from 'react';

const Flowers = () => {

    const [flowers, setFlowers] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data));
    } ,[])
    return (
        <div className='container'>
            <h1 className='text-success text-center mt-5'>"Life is the flower for which love is honey"</h1>
            <h3 className='text-danger text-center mt-3'>Please Choose Flower</h3>
        </div>
    );
};

export default Flowers;