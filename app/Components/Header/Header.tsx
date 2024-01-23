'use client'
import { useState } from "react";
import Link from "next/link";
import Titles from "./ListTitles";
import ListLinks from "./ListLinks";
import ListClassNames from "./ListClassName";
import NameElement from "./ListName_menu";
import Image from "next/image";
import './style.css';

function Header(){
    const[stateHover, set_stateHover] = useState('');

    const handleClick = (e:any) => {
        e.target.className === 'text1-5' ? window.location.href = '../SecondPage' : '/';
        e.target.className === 'menu-0' ?  window.location.href = '../app' : '/';
    };

    function handleMouseEnter(e:any){        
        e.target.className.includes("menu") 
        ? set_stateHover(String(e.target.className).slice(String(e.target.className).length-1))
        : set_stateHover(String(e.target.className).slice(4,5));
    }

    function handleMouseLeave(e:any){
        set_stateHover("&");
    }

    return<header className="header">
        <nav className="nav">
            <ul className="list">
                {
                    Titles.map((el, index) => {
                        var classTitle = NameElement[index];
                        return (
                            <Link key={index} href='/' className={classTitle} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><strong>{el}</strong></Link>
                        )
                    })
                }
            </ul>
            <ul className="listTwo">
                {
                    ListLinks.map((el, index) => {
                        if(String(index)===String(Number(stateHover) - 1)){
                            return(
                                el.map((e, i) => {
                                    var classTitle = ListClassNames[index][i];
                                    return <Link key={i} href="/" className={classTitle} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{display:'block'}}>{e}</Link>
                                })
                            )
                        }
                        
                    })
                }
                
            </ul>
        </nav>
        <h1 className="btn-h1"><strong>ЗАПИСАТЬСЯ</strong></h1>
        <span className="flex absolute top-[25px] right-[100px] w-[166px] h-[30px] justify-between">
            <Image src='/free-icon-vkontakte-4494517.png' width={30} height={30} alt='VK' className="hover:cursor-pointer"/>
            <Image src='/free-icon-twitter-145812.png' width={30} height={30} alt='Twitter' className="hover:cursor-pointer"/>
            <Image src='/free-icon-telegram-2111646.png' width={30} height={30} alt='Telegram' className="hover:cursor-pointer"/>
        </span>
    </header>
}
export default Header;
