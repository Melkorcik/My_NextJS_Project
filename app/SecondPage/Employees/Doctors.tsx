import './style.css';
import Form from '../Form/page';

async function FetchRequests(){
    return await fetch('http://localhost:3019/FirstData').then(response => response.json());        
}

async function Doctors(){
    const req = await FetchRequests();

    return<div>
        <h1 className="title-job-doctors"><strong>НАШИ СПЕЦИАЛИСТЫ</strong></h1>
            <div className="container-doctors">
            {    
                [...req[0].Doctors].map((el, index) => {
                    return (
                        <div className="box-photo-doctors">
                            <div>
                                <img src={el.photo} className="photoevery-doctors"/>
                            </div>
                        <div className="card-every_doctors">
                            <h2 className="job_title"><strong>{el.job_title}</strong></h2>
                                <div className="about_doctors">
                                    <p><strong className="sec_name">фамилия:</strong> {el.last_name}</p>
                                    <p><strong className="fir_name">имя:</strong> {el.first_name}</p>
                                    <p><strong className="last_name">отчество:</strong> {el.sec_mane}</p>
                                    <p><strong className="expirience_number">стаж:</strong> {el.experience} лет</p>
                                </div>
                                    <div className="button_write">
                                        <a href = "#top" className="link_write">Записаться к врачу</a>
                                    </div>
                            </div>
                        </div>
                        )
                    })
            }
            </div>
                <p className="_link" id="top"></p>  
                <Form/>         
        </div>
}
export default Doctors;