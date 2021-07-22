import React from "react"
import { Wrapper } from "../../components"
import logo from "./assets/logo.svg"
import s from "./styles.module.css"

const Intro = () => {
  return (
      <Wrapper>
        <div className={s.container}>
          <img src={logo} className={s.logo} />
        </div>
      </Wrapper>
  )
}

export default Intro
