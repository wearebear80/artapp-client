/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react"
import { Link } from "react-scroll"
import { Wrapper } from "../../components"
import VideoSrc from "../../assets/test.MOV"
import Arrow from "../../assets/arrow.svg"
import Play from "../../assets/play.svg"
import Stop from "../../assets/stop.svg"
import s from './styles.module.css'

type TState = 'ready' | 'paused' | 'play'

type TControlProps = {
  state: TState
  onPlay: () => void
}

const Controls: React.FC<TControlProps> = ({ state, onPlay }) => {
  if (state === "ready") {
    return <img onClick={onPlay} className={s.play} src={Play} />
  }

  if (state === "paused") {
    return <img onClick={onPlay} className={s.stop} src={Stop} />
  }

  return null
}

const Video = () => {
  const videoEl = useRef<HTMLVideoElement>(null)
  const [state, setState] = useState<TState>("ready")

  const onPlay = () => {
    if (videoEl.current) {
      if (videoEl.current.paused) { 
        videoEl.current.play()
        setState("play")
      } else {
        videoEl.current.pause()
        setState("paused")
      }
    }
  }

  return (
    <Wrapper>
      <video id="video" ref={videoEl} onClick={onPlay} className={s.video}>
        <source src={VideoSrc} />
      </video>
      <div className={s.controls}>
        <Controls state={state} onPlay={onPlay} />
      </div>
      <Link
        activeClass="active"
        to="outro"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div className={s.footer}>
          <img className={s.arrow} src={Arrow} />
        </div>
      </Link>
    </Wrapper>
  )
}

export default Video
