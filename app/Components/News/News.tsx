'use client'
import './style.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import data from './Data';

function News(){
    const[len, setLen] = useState(0);
    const[back, set_back] = useState('false');
    
    var time:any;
    const rememberLength = useMemo(()=>{
        localStorage.setItem('length: ', String(len));
    },[len])

    const turn_back = useMemo(()=>{
        localStorage.setItem('back: ', back);
    },[back])

    const handleMouseLeave = () => {
        set_back('true');               
    };

    function handleMouseEnterClass(e:any){
        if(String(e.target.className) !== '')localStorage.setItem('classValue: ', String(String(e.target.className).slice(5,6)));
    }

    const handleMouseEnter = useCallback(() => {
        new Promise<void>((resolve, reject) => {
            return (
                setTimeout(()=>{
                resolve();
                },300)
            )  
            
        })
        .then(() => {            
            time = setInterval(()=>{
                if(Number(localStorage.getItem('length: ')) < 336 && !String(localStorage.getItem('back: ')).includes('true')){
                    setLen(prev => prev + 13);
                }
                if(String(localStorage.getItem('back: ')).includes('true')){
                    Number(localStorage.getItem('length: ')) <= 0 ? clearInterval(time) : setLen(prev => prev - 13);  
                    if(String(localStorage.getItem('back: ')).includes('true') && Number(localStorage.getItem('length: ')) <= 0){
                        set_back('false');
                    }                  
                }
            },1)
        }).catch(err => console.error('Ошибка в Promise ', err));
    }, [setLen, set_back])  

    useEffect(() => {
        if (typeof window !== 'undefined') {
          window.localStorage.clear();
        }
    }, []);

    return<section className="container-news">
        <h1 className="title-news"><strong>СВЕЖИЕ НОВОСТИ</strong></h1>
        <div className="line-news" style={{marginLeft:'-36px'}}>
            {
                 data.map((el, index) => {
                    var img_cls = String("imgs-"+index), main_cls = String("mais-"+index),
                        classValueImg = Number(String(localStorage.getItem('classValue: ')));
                    return(
                        <div 
                            key={index} 
                            onMouseEnter={handleMouseEnterClass} 
                            className={main_cls}
                            style={{minHeight:'303px', minWidth:'303px', marginLeft:'2px', zIndex:'6', textAlign:'center', cursor:'pointer', overflow:'hidden'}}
                        >
                        <img 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                            alt="img" 
                            src={el.ImgNews} 
                            className={img_cls}
                            style={{minHeight:'212px', minWidth:'303px', borderRadius:'16px', marginTop:'3px'}}
                        />
                            <h3 className="title-news-child">{el.title}</h3>
                            <p className="title-news-child">{el.date}</p>
                            <span className="line-select" style={{width:`${classValueImg === index ? len : 0}px`, marginTop:'17px'}}></span>
                        </div>
                    )
                })
            }
            
        </div>
    </section>
}
export default News;