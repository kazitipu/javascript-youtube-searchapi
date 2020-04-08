import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedContent: "",
      videos: []
    };
  }
  searchedFor = event => this.setState({ searchedContent: event.target.value });
  handleSubmit = async event => {
    event.preventDefault();

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: "AIzaSyAhSWAHeUA4yQxJZt1y94-jHeSwQ2kaLz8",
          part: "snippet",
          maxResults: 5,
          q: this.state.searchedContent
        }
      }
    );
    this.props.getVideoList(response.data.items);
  };

  render() {
    return (
      <div className="my-auto">
        <form onSubmit={this.handleSubmit}>
          <label>SearchBar</label>
          <input
            className="form-control"
            type="text "
            onChange={this.searchedFor}
            value={this.state.searchedContent}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
