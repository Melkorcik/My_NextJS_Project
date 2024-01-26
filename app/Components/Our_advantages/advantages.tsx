import './style.css';
import List_Advantages from './List_advantages';
import ListAdvantages_Title from './List_titles';
import List_description from './List_decription';

function Advantages(){
    return<section className="container-advantages">
        <h1 className="title-advantages"><strong>Наши преимущества</strong></h1>
        <div className="box-advantages">
            {
                List_Advantages.map((el, index) => {                
                    return(
                        <div className="box-view_">
                            <div>
                                <img src={el} alt="img" className="image-advantages"/>
                            </div>
                            <div>
                                <h3 className="title-image-advantages"><strong>{ListAdvantages_Title[index]}</strong></h3>
                                <p className="description-advantages">{List_description[index]}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
}
export default Advantages;