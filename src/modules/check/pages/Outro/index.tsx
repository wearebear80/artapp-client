import React from "react"
import { Wrapper } from "../../components"
import s from "./styles.module.css"

const Outro = () => {
  return (
    <Wrapper>
      <div className={s.container}>
        <div className={s.title}>
          <span className={s.text}>Шаг 3</span>
        </div>
        <div className={s.textBig}>
          <div className={s.titleBig}>всё работает? ура! </div>
          почитать о проекте ещё раз или купить билет можно вот здесь
        </div>
      </div>
    </Wrapper>
  )
}

export default Outro
