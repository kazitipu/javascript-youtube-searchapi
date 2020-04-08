import React from "react";
// import VideoList from "./videolist";

const VideoItem = props => {
  return (
    <div key={props.key} onClick={() => props.selectedVideo(props.video)}>
      <div>
        <div className="thumbnail">
          <img src={props.video.snippet.thumbnails.medium.url} alt="5"></img>
          <div className="caption">
            <h3>{props.video.snippet.title}</h3>
            <p>{props.video.snippet.description}</p>
            <p>
              {/* <a href="#" class="btn btn-primary" role="button">
                Button
              </a>{" "}
              <a href="#" class="btn btn-default" role="button">
                Button
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
