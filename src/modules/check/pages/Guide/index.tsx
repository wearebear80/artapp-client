/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Link } from "react-scroll"
import { Wrapper } from "../../components"
import Arrow from "../../assets/arrow.svg"
import s from "./styles.module.css"
import ms from "../../main_styles.module.css"

const Check = () => {
  return (
    <Wrapper>
      <Link
        activeClass="active"
        to="video"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div id="guide" className={s.container}>
          <div className={s.title}>
            <span className={s.text}>Шаг 2</span>
          </div>
          <div className={s.textMid}>
            пожалуйста, загрузите видео, чтобы проверить совместимость вашего
            браузера с нашей программой
          </div>
          <div className={s.textMid}>
            Если страница работает корректно, перейдите по ссылке для покупки
            билета
          </div>
          <div className={s.footer}>
            <img className={ms.arrow} src={Arrow} />
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}

export default Check
