import style from './Header.module.css';
import { BiMap } from 'react-icons/bi';
import { BsPhone, BsWhatsapp } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className={style.header}>
      <div className={style.logoBlock}>
        <Link to='/'>
           <h1 className={style.logo}>METALLEX</h1>
        </Link>
       
      </div>
      <div className={style.contacts}>
        <div className={style.contact}>
          <p className={style.contactItem}>
            <span className={style.icon}>
              <BiMap />
            </span>{' '}
            Краснодарский край,
            <br /> республика Адыгея
          </p>
          <a href="tel:+79002433790">
          <p className={style.contactItem}>
            <span className={style.icon}>
              <BsPhone />
            </span>
            +7(900) 243-37-90
          </p>
          </a>
        </div>

        <div className={style.sosial}>
         <a href="https://api.whatsapp.com/send?phone=9140464566" target='_blank'>
            <p className={style.icon}>
              <BsWhatsapp />
            </p>
          </a>
         
          <a href="https://vk.com/id103625609" target='_blank'>
          <p className={style.icon}>
            <SlSocialVkontakte />
          </p>
          </a>
        </div>
      </div>
      <div className={style.burger}>
        <p>
          <GiHamburgerMenu onClick={() => setActiveMenu(!activeMenu)} />
        </p>
        <span />
      </div>
      <MobileMenu active={activeMenu} setActiveMenu={setActiveMenu} />
    </div>
  );
};

export default Header;
