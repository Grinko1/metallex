import style from './Benefits.module.css';
import { FaUserFriends } from 'react-icons/fa';
import { GiStrong, GiTwoCoins } from 'react-icons/gi';

const Benefits = () => {
  return (
    <div className={style.benefits}>
      <div className={style.benefitItem}>
        <h1>Опытные специалисты</h1>
        <span className={style.icon}>
          <FaUserFriends />
        </span>

        <p>
          высококвалифицированные сварщики, собственный цех, в нашем арсенале сварка электродами и
          полуавтоматом.
        </p>
      </div>
      <div className={style.benefitItem}>
        <h1>Качественная работа</h1>
        <span className={style.icon}>
          <GiStrong />
        </span>
        <p>
          после сварки остается ровный и прочный сварочный шов. все изделия проходят проверку на
          прочность, надежность и качество.
        </p>
      </div>
      <div className={style.benefitItem}>
        <h1>
          Сварка <br /> под ключ
        </h1>
        <span className={style.icon}>
          <GiTwoCoins />
        </span>
        <p>от оценки объекта и составления сметы до сварки и проверки конструкции.</p>
      </div>
      {/* <div className={style.benefitItem}>
        <h1>ЛУЧШАЯ ЦЕНА</h1>
        <span className={style.icon}>
          <GiTwoCoins />
        </span>
        <p>
          Самые выгодные цены, без переплат Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Magnam deleniti voluptatem, ex hic modi porro eligendi esse suscipit excepturi
          commodi.
        </p>
      </div> */}
    </div>
  );
};

export default Benefits;
