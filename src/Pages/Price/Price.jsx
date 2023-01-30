import style from './Price.module.css';

const Price = () => {
    return (
        <div className={style.price}>
            <h1>Здесь будет прайс</h1>
            <div className={style.temp}>
                <p>Можно сделать таблицей</p>
            <img className={style.img1} src="/img/price1.png" alt=""/>
            <p>Либо так расписать</p>
            <img className={style.img2}src="/img/price2.png" alt=""/>
            </div>

        </div>
    );
};

export default Price;