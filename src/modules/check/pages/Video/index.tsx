import React from "react"
import { Wrapper } from "../../components"
import VideoSrc from "../../assets/video.mov"

const s = {
  video: {
    width: '100vw',
    height: '100vh'
  }
}

const Video = () => {
  return (
    <Wrapper>
      <video style={s.video}>
        <source src={VideoSrc} type='video/ogg; codecs="theora, vorbis"' />
      </video>
    </Wrapper>
  )
}

export default Video
