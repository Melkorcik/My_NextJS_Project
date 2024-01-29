import ListData from './List_data';
import './ContactInf.css';

function ContactInf(){
    return<div className="container-contacInfo">
        <div className="line-bg"></div>
        <div className="note-container">
        {
            ListData.map((el, index) => {
                var class_container = "container-test-image" + String(index),
                    class_title = "title-contact" + String(index),
                    class_discription = "description-contact" + String(index);
                return(                   
                    <div className={class_container}>
                        <h1 className={class_title}><strong>{ListData[index][1]}</strong></h1>
                        <p className={class_discription}><strong>{ListData[index][2]}</strong></p>
                        <span className="img-test">
                            <img 
                                src={ListData[index][0]} 
                                alt="img"
                                className="Timg"
                            />
                        </span>
                    </div>
                )
            })
        }
        </div>
    </div>
}
export default ContactInf;