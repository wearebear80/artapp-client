/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Wrapper } from "../../components"
import { Link } from "react-scroll"
import logo from "./assets/logo.svg"
import s from "./styles.module.css"

const Intro = () => {
  return (
    <Wrapper>
      <Link
        activeClass="active"
        to="hello"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div className={s.container}>
          <img src={logo} className={s.logo} />
        </div>
      </Link>
    </Wrapper>
  )
}

export default Intro
