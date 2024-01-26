import Image from "next/image";
import './style.css';

async function FetchReq(){
    return await fetch('http://localhost:3019/FirstData').then(resp => resp.json());
}

async function MetaData(){
    const data = await FetchReq();

    return <section className="container">
        <Image src='/free-icon-globe-11500693.png' width={100} height={100} alt="Logo" className="Logo"/>
        <div className="content-box">
            <div className="images-box">
                <Image src='/free-icon-envelope-5287325.png' width={90} height={30} alt="email" className="email"/>
                <Image src='/free-icon-incoming-call-8772675.png' width={90} height={30} alt="email" className="phone"/>
                <Image src='/free-icon-time-3237667.png' width={90} height={30} alt="email" className="clock"/>
                <Image src='/free-icon-map-marker-6870019.png' width={90} height={30} alt="email" className="marker"/>
            </div>
            <div className="box-meta">
                {
                    [...data[0].HeaderData].map((el, index) => {
                        return(
                            <div key={index} className="box-meta-element">
                                <h3 className="title">{el.title}</h3>
                                <p className="info"><strong>{el.information}</strong></p>
                            </div>
                        )
                    })
                }
            </div>            
        </div>
    </section>
}
export default MetaData;