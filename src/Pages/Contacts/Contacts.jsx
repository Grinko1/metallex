import style from './Contacts.module.css';
import cn from 'classnames';
import Nav from '../../Component/Nav/Nav'
import { BsPhone, BsWhatsapp } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { useEffect, useState } from 'react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [isError, setIsErrorMsg] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  useEffect(() => {
    if (focused === true) {
      setIsErrorMsg(true);
    }
  }, [focused]);
  
  useEffect(() => {
      if(name !== '' && email !== '' && phone !== '') {
          setIsErrorMsg(false)
      }
  }, [name, phone, email])

  const sendMsg = (e) => {
    e.preventDefault();
    setName('')
    setPhone('')
    setEmail('')
    setIsErrorMsg(false)
    setFocused(false)
  };

  return (
      <>
      <Nav/>
    <div className={style.payment}>
      <h1 className={style.header}>Контакты</h1>

      <h2 className={style.subHeader}>Вы можете связаться с нами любым удобным способом:</h2>
      <div className={style.info}>
        <a href="tel:+79002433790" className={cn(style.tel, style.item)}>
          <p>Позвонить</p>
          <span className={style.icon}>
            <BsPhone />
          </span>
          +7(900) 243-37-90
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=9002433790"
          target="_blank"
          rel="noreferrer"
          className={style.item}>
          <p>Написать в Whatsapp</p>
          <span className={cn(style.icon, style.wa)}>
            <BsWhatsapp />
          </span>
        </a>

        <a href="https://vk.com/id781728381" target="_blank" className={style.item } rel="noreferrer">
          <p>Написать в VK </p>
          <span className={cn(style.icon, style.vk)}>
            <SlSocialVkontakte />
          </span>
        </a>
      </div>
      <h2 className={style.subHeader}>Либо заполнить форму и мы вам перезвоним:</h2>
      <div className={style.formBlock}>
        <form action="" className={style.form}>
          <label>
            <input
              required
              type="text"
              placeholder="Имя"
              onBlur={handleFocus}
              focused={focused.toString()}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={style.input}
            />

          </label>
          <label>
            <input
              required
              type="email"
              autoComplete="email"
              
              placeholder="Почта"
              onBlur={handleFocus}
              focused={focused.toString()}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={style.input}
            />

           
          </label>
          <label>
            <input
              required
              type="tel"
              placeholder="Телефон"
              onBlur={handleFocus}
              focused={focused.toString()}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={style.input}
            />

           
          </label>
          <button disabled ={isError ?  true : false} onClick={(e) => sendMsg(e)}>Отправить заяку</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contacts;
