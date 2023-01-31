import { memo } from 'react';
import Benefits from '../../Component/Benefits/Benefits';
import Nav from '../../Component/Nav/Nav';
import OrangeBlock from '../../Component/OrangeBlock/OrangeBlock';
import Slider from '../../Component/Slider/Slider';
import style from './Main.module.css';

 const Main =  memo(() => {
  return (
    <>
      <Nav />
      <div className={style.banner}>
        <div className={style.headBlock}>
          <h1 className={style.mainHeader}>
            СВАРОЧНЫЕ РАБОТЫ <br /> С ВЫЕЗДОМ НА ОБЪЕКТ
            <br /> В КРАСНОДАРСКОМ КРАЕ И АДЫГЕЕ
          </h1>
        </div>

        <Benefits />
      </div>
      <OrangeBlock/>
      <Slider/>

    </>
  );
});

export default Main;
