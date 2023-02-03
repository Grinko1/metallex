import style from './Price.module.css';
import styleC from '../Contacts/Contacts.module.css'
import Nav from '../../Component/Nav/Nav'
import cn from 'classnames'
import { BsPhone, BsWhatsapp } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';

const Price = () => {
    return (
        <>
        <Nav/>
        <div className={style.price}>
            <h1 className={style.header}>Прайс</h1>
            <div className={style.container}>
                <div className={style.main}>
                      <ul className={style.items}>
                    {/* <li className={style.item}>Арочный навес <br/> из поликарбоната - <span>50 т.р без учета материала</span> </li> */}
                    <li className={style.item}>Навесы - от 1500 т за м&sup2; </li>
                    <li className={style.item}>Заборы - от 900 рублей за погонный метр</li>
                    <li className={style.item}>Перила - от 1100 за погонный метр</li>
                    <li className={style.item}>Мебель в стиле лофт- по договоренности</li>
                    <li className={style.item}>Террасы - от 1500 за м&sup2;</li>
                    <li className={style.item}>Козырьки- по договоренности</li>
                    <li className={style.item}>Ремонт и монтаж бортов грузовых автомобилей- по договоренности</li>
                    <li className={style.item}>Кузовной ремонт автомобиля  - от 3000</li>
                    <li className={style.item}>Беседки от -1500 за м&sup2;</li>
                    <li className={style.item}>Пандусы - по договоренности</li>
                    
                </ul>
                <img className={style.exampleImg} src="/img/9.jpeg" alt="Любые сварочные работы Краснодарский край и Адыгея"/>
                </div>
              
           
            <h2 className={styleC.subHeader}>Уточнить стоимость:</h2>
      <div className={styleC.info}>
        <a href="tel:+79002433790" className={cn(styleC.tel, styleC.item)}>
          <p>Позвонить</p>
          <span className={styleC.icon}>
            <BsPhone />
          </span>
          +7(900) 243-37-90
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=9140464566"
          target="_blank"
          rel="noreferrer"
          className={styleC.item}>
          <p>Написать в Whatsapp</p>
          <span className={cn(styleC.icon, styleC.wa)}>
            <BsWhatsapp />
          </span>
        </a>

        <a href="https://vk.com/id103625609" target="_blank" className={styleC.item } rel="noreferrer">
          <p>Написать в VK </p>
          <span className={cn(styleC.icon, styleC.vk)}>
            <SlSocialVkontakte />
          </span>
        </a>
      </div>
        </div>
        </div>
        </>
    );
};

export default Price;