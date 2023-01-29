import style from './Nav.module.css';

const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.container}>
                <ul className={style.navItems}>
                    <li>Главная</li>
                    <li>Каталог услуг</li>
                    <li>Прайс</li>
                    <li>Оплата</li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;