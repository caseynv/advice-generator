import React, { useState, useEffect } from 'react';

import { Icon } from '@iconify/react';
import axios from 'axios';

function Card() {
    /*let arr = [1, 2, 1, 2, 2, 2, 2, 1, 1, 1]

    function team(array) {
        let p = [];
        let p1 = [];

        for(let i = 0; i < array.length; i++){
            if(array[i] === 1){
                p.push(array[i])
            }else{
                p1.push(array[i])
            }
            
        }
        if(p.length > p1.length){
            console.log('Team 1: ' + p.length)
        }else if(p.length < p1.length){
            console.log('Team 2: ' + p.length)
        }else{
            console.log('Team 1 and 2 tie at ' + p.length)
        }

        
    }
    team(arr)
    
    function team(array) {
        var count = 0;
        array.forEach((v) => (v === 1 && count++));
        
        var count1 = 0;
        array.forEach((v1) => (v1 === 2 && count1++));
        if (count1 > count){
            console.log(count1)
        }else if (count1 < count){
            console.log(count)
        }else{
            console.log(count1 + " and " + count + "are equal")
        }
    }
    team(arr)*/
    
    const [advices, setAdvices] = useState("");
    const [loading, setLoading] = useState([]);
    const [error, setError] = useState([]);

    
        async function apiAdvice() {
        
        await axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            let resp = response.data.slip
            setAdvices(resp)
        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            setError(error)
        })
        .finally(() => {
            setLoading(false)
        })
    };
    
    useEffect(() => {apiAdvice()}, []);


    /*.then((response) => {
                const adviceContent = response.data.slip;
                
                setAdvice(adviceContent);
                console.log(advice)
            });
            .catch((error) => {
                console.log('Error', error)
            })
        };
        
        useEffect(() => {apiAdvice(), []});
        */
        return (
        <>

            <div className='body'>
                <div className='card'>
                    <div className='advice'>
                        <p className='advice-id'>ADVICE #{advices.id} </p>
                        <p className='advice-body'>{advices.advice}</p>
                        
                    </div>
                    <div className='row bfr-btn'>
                        <div className='col-5 g-0'>
                            <hr></hr>
                        </div>
                        <div className='icon col-1 g-0'>
                            <Icon icon="fluent:pause-16-filled" color="white" width="30" height="30" />
                        </div>
                        <div className='col-5 g-0'>
                            <hr></hr>
                        </div>
                    </div>
                    <button onClick={ apiAdvice } className='button'>
                        <Icon icon="fluent:record-stop-32-filled" color="#5af65a" width="50" height="50" />
                    </button>
                    
                </div>
                
            </div>
        </>
    );
  }


export default Card;