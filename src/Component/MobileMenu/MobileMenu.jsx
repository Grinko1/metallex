import style from './MobileMenu.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsPhone, BsWhatsapp } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';

const MobileMenu = ({ active, setActiveMenu }) => {
  return (
    <div
      className={cn(style.menuMobile, { [style.active]: active === true })}
      onClick={() => setActiveMenu(false)}>
      <div className={style.blur} />
      <div className={style.menu_content} onClick={(e) => e.stopPropagation()}>
        <div className={style.menu_header}>
          <div className={style.btn_close} onClick={() => setActiveMenu(false)}>
            <AiOutlineClose />
          </div>
          <h1 className={style.header}>Metallex</h1>
          <ul className={style.menu_items}>
         

      
       
              <li className={style.sosial}>
              <a href="https://api.whatsapp.com/send?phone=9002433790" target='_blank' onClick={() => setActiveMenu(false)} rel="noreferrer">
                <BsWhatsapp />
                </a>
                <a href="https://vk.com/id781728381" target='_blank'onClick={() => setActiveMenu(false)} rel="noreferrer">
                <SlSocialVkontakte />
                </a>
              </li>
            
          
          </ul>
          <ul className={cn( style.menu_subitems)}>
            <li className={style.menu_item}>
              <Link to="/" onClick={() => setActiveMenu(false)}>
                Главная
              </Link>
            </li>
            <li className={style.menu_item}>
              <Link to="/catalog" onClick={() => setActiveMenu(false)}>
                Каталог услуг
              </Link>
            </li>
            <li className={style.menu_item}>
              <Link to="/price" onClick={() => setActiveMenu(false)}>
                Прайс
              </Link>
            </li>
            <li className={style.menu_item}>
              <Link to="/contacts" onClick={() => setActiveMenu(false)}>
                Контакты
              </Link>
            </li>
          </ul>
          <ul className={style.menu_items}>
          <a href="tel:+79002433790" onClick={() => setActiveMenu(false)}>
              <li className={style.menu_item}>
                <span className={style.icon}>
                  <BsPhone />
                </span>{' '}
                +7(900) 243-37-90
              </li>
            </a>
            <Link to="/" onClick={() => setActiveMenu(false)}>
              <li className={style.menu_item}>
                <span className={style.icon}>
                  <BiMap />
                </span>
                <p>Краснодарский край, республика Адыгея</p>
              </li>
            </Link>
                   
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
