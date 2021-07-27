/* eslint-disable jsx-a11y/alt-text */

import React from "react"
import cross from './assets/cross.svg'
import logo from "../../assets/logo.svg"
import s from "./styles.module.css"

const Desktop = () => {
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <img src={logo} style={{ width: "130px" }} />
      </div>
      <img
        src={cross}
        className={s.cross}
        style={{ bottom: "40px", right: "40px" }}
      />
      <img
        src={cross}
        className={s.cross}
        style={{ left: "40px", bottom: "40px" }}
      />
      <img
        src={cross}
        className={s.cross}
        style={{ left: "40px", top: "40px" }}
      />
      <img
        src={cross}
        className={s.cross}
        style={{ top: "40px", right: "40px" }}
      />
      <div>
        <h1 className={s.title}>OOPS!</h1>
        <div className={s.text}>
          для просмотра данной веб-страницы<br /> воспользуйтесь мобильным устройством
        </div>
      </div>
      <div className={s.footer}>2021</div>
    </div>
  )
}

export default Desktop
