import style from './Catalog.module.css';
import {RxDoubleArrowDown} from 'react-icons/rx'

const Catalog = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Мы делаем</h1>
      <ul className={style.services}>
        <li className={style.list}>Оценка объекта</li>
        <li className={style.arrow}><RxDoubleArrowDown/></li>
        <li className={style.list}>Консультация</li>
        <li className={style.arrow}><RxDoubleArrowDown/></li>
        <li className={style.list}>Закупка материала???</li>
        <li className={style.arrow}><RxDoubleArrowDown/></li>
        <li className={style.list}>Сварочные работы</li>
        <li className={style.arrow}><RxDoubleArrowDown/></li>
        <li className={style.list}>Монтаж ??? (если делаете) </li>
      </ul>
      <div className={style.weldings}>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/1.jpeg" alt="" />
          <p className={style.weldingName}>Сварка стали</p>
        </div>
        
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/2.jpeg" alt="" />
          <p className={style.weldingName}>Сварка труб</p>
        </div>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/3.jpeg" alt="" />
          <p className={style.weldingName}>Мебель Лофт</p>
        </div>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/4.jpeg" alt="" />
          <p className={style.weldingName}>Сварные навесы</p>
        </div>

        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/5.webp" alt="" />
          <p className={style.weldingName}>Сварные козырьки</p>
        </div>
        <div className={style.welding}>
          <img className={style.weldingImg} src="/img/6.jpeg" alt="" />
          <p className={style.weldingName}>Любые сварочные работы</p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
