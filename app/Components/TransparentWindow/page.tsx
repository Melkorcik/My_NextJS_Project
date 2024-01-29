import'./TranspStyle.css';
export default async function Transparent_Window({response}:any){
    return(
        <div>
            <div className="transparent-container-window" 
                     style={{
                        backgroundImage:`url(${response[0].Background_Img.img_background})`,
                        backgroundAttachment:'fixed',
                        backgroundPositionX:'center',
                        backgroundPositionY:'center'
                    }}>
                <span className="transparent-advertising">
                    <div className="transparent-description">
                        <h1 className="transparent-title">Если вам нужна индивидуальная консультация-мы поможем вам!</h1>
                        <p className="transparent-paragraph">Опишите нам свою проблему и наши специалисты ответят вам в течение нескольких часов</p>
                        <button className="transparent-button">Напишите нам</button>
                    </div>
                </span>
            </div>
        </div>
    )
}