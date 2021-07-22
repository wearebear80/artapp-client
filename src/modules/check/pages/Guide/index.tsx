import React from "react"
import { Wrapper } from "../../components"
import Arrow from "../../assets/arrow.svg"
import s from "./styles.module.css"

const Check = () => {
  return (
    <Wrapper>
      <div className={s.container}>
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
          <img className={s.arrow} src={Arrow} />
        </div>
      </div>
    </Wrapper>
  )
}

export default Check
