import React, { useState, useEffect } from 'react';

import { Icon } from '@iconify/react';
import axios from 'axios';

function Card() {
/*
    const [advicee, setAdvicee] = useState();
        axios.get('https://api.adviceslip.com/advice')
        .then((resp) => {
           
            console.log(resp.data.slip.id)
            console.log(resp.data.slip.advice)
        })*/

        return (
        <>
            <div className='body'>
                <div className='card'>
                    <div className='advice'>
                        <p>ADVICE </p>
                        <p>Advice</p>
                    </div>
                    <div className='row cute-design'>
                        <div className='col-5'>
                            <hr></hr>
                        </div>
                        <div className='col-1 no-gut'>
                            <Icon icon="fluent:pause-16-filled" color="white" width="30" height="30" />
                        </div>
                        <div className='col-5'>
                            <hr></hr>
                        </div>
                    </div>
                    <button className='button'>
                        <Icon icon="fluent:record-stop-32-filled" color="#5af65a" width="30" height="30" />
                    </button>
                    
                </div>
                
            </div>
            
        </>
    );
  }


export default Card;