import React from "react"
import { Wrapper } from '../../components'
import Arrow from '../../assets/arrow.svg'
import s from "./styles.module.css"

const Check = () => {
  return (
    <Wrapper>
      <div className={s.container}>
        <div className={s.title}>
          <span className={s.text}>Шаг 1</span>
        </div>
        <div className={s.textBig}>
          <div className={s.titleBig}>Привет,</div>
          вы на тестовой странице проекта «ПОГРУЖЕНИЕ»
        </div>
        <div className={s.footer}>
          <img className={s.arrow} src={Arrow} />
        </div>
      </div>
    </Wrapper>
  )
}

export default Check
