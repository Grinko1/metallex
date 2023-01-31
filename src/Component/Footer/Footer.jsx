import style from './Footer.module.css';
import { BiMap } from 'react-icons/bi';
import { BsPhone, BsWhatsapp } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import cn from 'classnames'

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.container}> 
        <Link to='/'>
             <h1 className={style.footerHeader}>Metallex</h1>
        </Link>
     

      <div className={style.left}>
        <div className={style.contact}>
          <a className={style.contactItem} href="tel:+79002433790">
            <span className={cn(style.icon, style.phone)}>
              <BsPhone />
            </span>
            +7(900) 243-37-90
          </a>
          <p className={style.contactItem}>
            <span className={cn(style.icon, style.map)}>
              <BiMap />
            </span>
            Краснодарский край,
            республика Адыгея
          </p>
        </div>

        <div className={style.contact}>
          <a href="https://api.whatsapp.com/send?phone=9140464566" target='_blank' rel="noreferrer">
            <p className={cn(style.icon, style.wa)}>
              <BsWhatsapp />
            </p>
          </a>
          <a href="https://vk.com/id103625609" target='_blank' rel="noreferrer">
          <p className={cn(style.icon, style.vk)}>
            <SlSocialVkontakte />
          </p>
          </a>
          </div>
      </div>
      <div className={style.right}>
        <ul className={style.menuLinks}>
            <Link to='/'><li>Главная</li></Link>
          
          <Link to='/catalog'><li>Каталог услуг</li></Link>
          
          <Link to='/'><li>Прайс</li></Link>
          
          <Link to='/'><li>Оплата</li></Link>
          
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
