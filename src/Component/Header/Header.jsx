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
        <h1 className={style.logo}>METALLEX</h1>
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
          <p className={style.contactItem}>
            <span className={style.icon}>
              <BsPhone />
            </span>
            +7(999) 999-99-99
          </p>
        </div>

        <div className={style.sosial}>
          <Link to="/">
            <p className={style.icon}>
              <BsWhatsapp />
            </p>
          </Link>
          <p className={style.icon}>
            <SlSocialVkontakte />
          </p>
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
