import React from "react"
import video from "./video/youth_live.mp4"


const s = {
    wrap: {
        background: "#000000",
        height: "100%",
        paddingTop: "100px",
    },
    video_container: {
        display: "flex",
        justifyContent: "center",
    },
    title: {
        color: "#ffffff",
        fontWeight: 200,
        letterSpacing: "10px",
        textAlign: "center" as const,
        padding: "15px",
    }
}

const Video = () => {
  return (
    <div style={s.wrap}>
      <h2 style={s.title}>сверхмолния</h2>
      <div style={s.video_container}>
        <video src={video} width="400" height="250" controls />
      </div>
      <h2 style={s.title}>юность</h2>
    </div>
  ) 
}

export default Video
