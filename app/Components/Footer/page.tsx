import Image from 'next/image';
import './style.css';

function Footer(){
    return<footer className="line-bg-footer">
        <div>
            <p className="marker-date-footer">Copyright © 2024</p>
            <p className="rules-footer">Все права защищены законодательством РФ. Использование материалов сайта возможно только с прямой ссылкой на источник.</p>
        </div>
        <div className="link-logo">
            <p className="title-footer-icon-company">Создано в IBM</p>
            <Image src="/icons8-ibm-512.png" width={30} height={30} alt="img" className="icon-footer"/>
        </div>
    </footer>
}
export default Footer;