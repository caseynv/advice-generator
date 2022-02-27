import React from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';

function Card() {
    const handleData = async (event) => {
        event.preventDefault();
        const resp = await axios.get("https://api.adviceslip.com/advice")
        console.log(resp.json())
        /*props.onSubmit(resp.data);
    }; catch (error){
        props.onSubmit(error)
        setState({ userName: '' })*/
    };
    return (
        <>
            <div className='body'>
                <div className='card'>
                    Hello
                </div>
                <div onClick={handleData} className='button'>
                    <Icon icon="ci:play-circle-outline" color="darkgreen" />
                </div>
            </div>
            
        </>
    );
  }


export default Card;