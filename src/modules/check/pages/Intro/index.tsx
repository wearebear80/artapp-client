/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Wrapper } from "../../components"
import Loader from './Loader'
import { Link } from "react-scroll"
import logo from "../../assets/logo.svg"
import s from "./styles.module.css"

const Intro = () => {
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <img src={logo} className={s.logo} />
      </div>
    </div>
  )
}

export default Intro
