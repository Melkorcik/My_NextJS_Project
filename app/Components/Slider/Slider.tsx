'use client'
import './style.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import urls from './List_el';
import Advertising from './List_Advertising';

localStorage.setItem('index', String(0));
localStorage.setItem('counter', String(1));
function Slider(){
    const[index, setIndex] = useState(Number(localStorage.getItem('index')));

    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            var counter:number = Number(localStorage.getItem('counter'));
            var number:number = Number(localStorage.getItem('index'));
            number++;
            number < 3 ? localStorage.setItem('index', String(number)) : localStorage.setItem('index', String(0));
            setIndex(Number(localStorage.getItem('index')));
            counter++;        
            localStorage.setItem('counter', String(counter));                        
        },9000)
        return(() => {
            clearInterval(timeInterval);
        })
    },[])
    
    return <div className="container-slider" style={{overflow:'hidden'}}>
        <motion.img 
            animate={{x:[1000, 0],opacity:[0, 1]}}
            transition={{duration:2, repeat:Infinity, repeatDelay:7}}
            src={urls[index]} 
            className="image-slider"
        />
        <motion.h2 
            animate={{x:[1000, 0],opacity:[0, 1]}}
            transition={{duration:2, repeat:Infinity, repeatDelay:7}}
            className="title-advertising"
        >
            <strong>{Advertising[index]}</strong>
        </motion.h2>
    </div>
}
export default Slider;
localStorage.clear();
