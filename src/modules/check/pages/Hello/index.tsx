/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Link } from "react-scroll"
import { Wrapper } from '../../components'
import Arrow from '../../assets/arrow.svg'
import s from "./styles.module.css"
import ms from "../../main_styles.module.css"

const Hello = () => {
  return (
    <Wrapper>
      <Link
        activeClass="active"
        to="guide"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div id="hello" className={s.container}>
          <div className={s.title}>
            <span className={s.text}>Шаг 1</span>
          </div>
          <div className={s.textBig}>
            <div className={s.titleBig}>Привет,</div>
            вы на тестовой странице проекта «ПОГРУЖЕНИЕ ПРОМЕНАД»
          </div>
          <div className={s.footer}>
            <img className={ms.arrow} src={Arrow} />
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}

export default Hello
