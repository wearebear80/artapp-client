import React from "react"
import s from "./styles.module.css"

const Wrapper: React.FC = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>
}

export default Wrapper
