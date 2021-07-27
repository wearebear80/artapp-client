import React from "react"
import {
  isMobile,
} from "react-device-detect"
import Intro from './pages/Intro'
import Hello from './pages/Hello'
import Guide from "./pages/Guide"
import Video from "./pages/Video"
import Outro from "./pages/Outro"
import Desktop from "./pages/Desktop"
import ms from './main_styles.module.css'

const Check = () => {
  if (!isMobile) {
    return <Desktop />
  }
    return (
      <div className={ms.wrap}>
        <Intro />
        <Hello />
        <Guide />
        <Video />
        <Outro />
      </div>
    )
}

export default Check
