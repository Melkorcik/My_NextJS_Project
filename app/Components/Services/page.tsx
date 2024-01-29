import './style.css';
import ListServices from "./List_services";
import Procedures from "./List_procedures";

function Services(){
    return<section className="container-servies">
        <h1 className="title-name-servies"><strong>УСЛУГИ</strong></h1>
        <div className="box-image-servies">
            {
                ListServices.map((el, index) => {
                    return(
                        <div className="card-procedure">
                            <img src={el} width={3} height={2} alt="img" className="image"/>
                            <span className="title-procedure"><strong>{Procedures[index]}</strong></span>
                        </div>                        
                    )
                })
            }
        </div>
    </section>
}
export default Services;