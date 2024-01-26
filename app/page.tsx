import Header from "./Components/Header/Header";
import MetaData from "./Components/MetaData/page";
import Slider from "./Components/Slider/Slider";
import Services from "./Components/Services/Services";
import Advantages from "./Components/Our_advantages/advantages";
import News from "./Components/News/News";
import ContactInf from "./Components/ContactInformation/ContactInf";
import Footer from "./Components/Footer/Footer";
import Transparent_Window from "./Components/TransparentWindow/TransparentWindow";

async function FetchRequest(){
  return await fetch('http://localhost:3019/FirstData').then(response => response.json());
}

export default async function Home() {
  const response:any = await FetchRequest();
  return (
    <>
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
    </>
  )
}
