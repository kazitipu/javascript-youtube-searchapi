import React from "react";
import VideoItem from "./videoitem";

const VideoList = props => {
  const video = props.videos.map(video => {
    // console.log(video);
    return (
      <>
        <VideoItem
          key={video.id.videoId}
          video={video}
          selectedVideo={props.selectedVideo}
        />
      </>
    );
  });
  return <div> {video} </div>;
};
export default VideoList;
