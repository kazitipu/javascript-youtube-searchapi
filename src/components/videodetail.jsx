import React from "react";

const VideoDetail = props => {
  console.log(props.video);
  if (props.video) {
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
      <div className="m-auto">
        <h3>{props.video.snippet.title}</h3>
        <div style={{ display: "inline-block" }}>
          <iframe
            title={props.video.snippet.title}
            width="660"
            height="415"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            src={videoSrc}
          />
        </div>
        <div>{props.video.snippet.title}</div>
      </div>
    );
  }
  return (
    <iframe
      title="rrr"
      width="660"
      height="415"
      src="https://www.youtube.com/embed/rXwH2IpnVqY"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};
export default VideoDetail;
