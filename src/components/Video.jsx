import React from "react";
import video from "../assets/videos/highway-loop.mp4";
function Video() {
  return (
    <div>
      <video src={video} autoPlay loop muted style={{ width: "100%" }} />
    </div>
  );
}

export default Video;
