import style from "./Slider.module.css";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import cn from 'classnames'

export default function BtnSlider({ direction, moveSlide }) {

  return (
    <button
      onClick={moveSlide}
      className={cn(style.btnSlide, {
          [style.next] : direction === "next",
          [style.prev] : direction === "prev",
      })}
    >
      {direction === "next" ? <AiOutlineDoubleRight className={style.rigthIcon}/> : <AiOutlineDoubleLeft className={style.leftIcon}/> }
    </button>
  );
}