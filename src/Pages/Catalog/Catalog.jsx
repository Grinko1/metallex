import style from './Catalog.module.css';
import {RxDoubleArrowDown} from 'react-icons/rx'
import cn  from 'classnames'
import Nav from '../../Component/Nav/Nav';
import FloatingBtn from '../../Component/FloatingBtn/FloatingBtn';

const Catalog = () => {
  return (
    <>
    <Nav/>
    <div className={style.container}>
      <h1 className={style.header}>Мы делаем</h1>
      <ul className={style.services}>
        <li className={style.list}>Оценка объекта</li>
        <li className={style.arrow}><RxDoubleArrowDown/></li>
        <li className={style.list}>Консультация</li>
        <li className={style.arrow}><RxDoubleArrowDown/></li>
        <li className={style.list}>Закупка материала</li>
        <li className={style.arrow}><RxDoubleArrowDown/></li>
        <li className={style.list}>Сварочные работы</li>
        <li className={style.arrow}><RxDoubleArrowDown/></li>
        <li className={style.list}>Монтаж </li>
      </ul>
      <div className={style.weldings}>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/1.jpeg" alt="Сварка стали Краснодарский край и Адыгея" />
          <p className={style.weldingName}>Сварка стали</p>
        </div>
        
      
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/3.jpeg" alt="Мебель Лофт Краснодарский край и Адыгея" />
          <p className={style.weldingName}>Мебель Лофт</p>
        </div>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/4.jpeg" alt="Сварные навесы Краснодарский край и Адыгея" />
          <p className={style.weldingName}>Сварные навесы</p>
        </div>

        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/5.webp" alt="Сварные козырьки Краснодарский край и Адыгея" />
          <p className={style.weldingName}>Сварные козырьки</p>
        </div>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/7.jpeg" alt="Ремонт и монтаж грузовых бортов Краснодарский край и Адыгея" />
          <p className={style.weldingName}>Ремонт и монтаж бортов</p>
        </div>
        <div className={style.welding}>
          <img className={cn(style.weldingImg, style.contain)} src="/img/8.JPG" alt="Кузовной ремонт Краснодарский край и Адыгея" />
          <p className={style.weldingName}>Кузовной ремонт</p>
        </div>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/2.jpeg" alt="Сварка труб Краснодарский край и Адыгея" />
          <p className={style.weldingName}>Сварка труб</p>
        </div>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/6.jpeg" alt="Любые сварочные работы Краснодарский край и Адыгея" />
          <p className={style.weldingName}>Любые сварочные работы</p>
        </div>
      </div>
    </div>
    <FloatingBtn/>
    </>
  );
};

export default Catalog;
