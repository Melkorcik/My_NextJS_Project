import '../Employees/style.css';

function Form(){
    return(
        <div className="form-box">
                <div className="boxposition">
                    <input type="text" placeholder='Имя' className="input-name"/>
                    <input type="number" placeholder='Номер телефона' className="input-number"/>
                    <select className="select-box">
                        <option>---</option>    
                        <option>Виолетова Анна Григорьевна</option>  
                        <option>Эйберман Виктор Романович</option>  
                        <option>Алефтинова Оксана Дакариева</option>  
                        <option>Иванова Ирина Алексеевна</option>  
                        <option>Анохин Константин Дмитриевич</option>  
                        <option>Рассказова Анна Вячеславовна</option>  
                        <option>Керман Марина Николаевна</option>  
                        <option>Витальев Николай Андреевич</option>  
                        <option>Траоре Сергей Ролилахлавич</option>  
                        <option>Посацкова Полина Романовна</option>  
                        <option>Стадник Елена Сергеевна</option>  
                        <option>Яблонев Масим Игнатьевич</option>  
                        <option>Дмитриева Алла Николаевна</option>  
                        <option>Павлов Кирилл Викторович</option>  
                        <option>Лимишевская Оксана Ильинична</option>  
                        <option>Петрушева Юлия Александровна</option>  
                    </select>                   
                    <input type="date" className="calendar-box"/>
                    <button className="button_submit">Отправить</button>
                </div>
            </div>
    )
}
export default Form;