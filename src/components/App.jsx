import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./videolist";
import VideoDetail from "./videodetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  getVideoList = arr => {
    this.setState({ videos: arr });
  };
  selectedVideo = video => this.setState({ selectedVideo: video });
  render() {
    return (
      <div className="container ">
        <div>
          <SearchBar getVideoList={this.getVideoList} />
        </div>
        <div className="m-6">
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div>
          <VideoList
            videos={this.state.videos}
            selectedVideo={this.selectedVideo}
          />
        </div>
      </div>
    );
  }
}

export default App;
