/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Wrapper } from "../../components"
import smile from "../../assets/smile.svg"
import s from "./styles.module.css"

const Outro = () => {
  return (
    <Wrapper>
      <div id="outro" className={s.container}>
        <div className={s.title}>
          <span className={s.text}>Шаг 3</span>
        </div>
        <div className={s.textBig}>
          <div className={s.titleBig}>всё работает? ура! </div>
          почитать о проекте ещё раз или купить билет можно вот{" "}
          <a href="/" className={s.link}>
            здесь
          </a>
        </div>
        <div className={s.footer}>
          <img className={s.smile} src={smile} />
          <br />
          <p>
            Возникли проблемы?
            <br />
            напишите нам:&nbsp;
            <a className={s.link} href="mailto:ask@pogrujenie.ru">
              @pogrujenie
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Outro
