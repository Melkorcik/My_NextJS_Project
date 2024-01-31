import React from "react";
import Header from "./Components/Header/Header";
import MetaData from "./Components/MetaData/page";
import Slider from "./Components/Slider/Slider";
import Services from "./Components/Services/page";
import Advantages from "./Components/Our_advantages/page";
import News from "./Components/News/News";
import ContactInf from "./Components/ContactInformation/page";
import Footer from "./Components/Footer/page";
import Transparent_Window from "./Components/TransparentWindow/page";
import  ErrorBoundary  from "./ErrorBoundary";

async function FetchRequest(){
  return await fetch('http://localhost:3019/FirstData')
  .then(response => response.json())
  .catch(err => console.error('Ошибка при получении данных из сервера', err));
}

export default async function Home() {
  const response:any = await FetchRequest();
  return (
    <>
      <ErrorBoundary>
      <div className="h-[2900px]">
        <Header/>
        <MetaData/>
        <Slider/>
        <Services/>
        <Advantages/>
      </div>
      <Transparent_Window response={response}/>
      <div className="h-[1166px]">
          <News/>
          <ContactInf/>
          <Footer/>
      </div>
      </ErrorBoundary>
      
    </>
  )
}
