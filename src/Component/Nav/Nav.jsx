import { Link } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.container}>
                <ul className={style.navItems}>
                    
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/catalog'>Каталог услуг</Link> </li>
                    <li><Link to='/price'>Прайс</Link> </li>
                    <li><Link to='/contacts'>Контакты</Link> </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;