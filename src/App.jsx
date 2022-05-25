import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "../src/config/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
class App extends Component {
  state = { videos: [], selectedvideo: null };
  componentDidMount() {
    this.onTermSubmit("ynw melly");
  }
  async onTermSubmit(term) {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0],
    });
  }
  onVideoSelect(video) {
    this.setState({ selectedvideo: video });
  }
  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "50px" }}>
          <SearchBar onFormSubmit={(term) => this.onTermSubmit(term)} />
          <div className="ui grid" style={{ marginTop: "5%" }}>
            <div className="ui row">
              <div
                style={{ overflowY: "auto", overflowX: "auto" }}
                className="eleven wide column"
              >
                <VideoDetail video={this.state.selectedvideo} />
              </div>
              <div
                className="five wide column"
                style={{
                  maxHeight: "60vh",
                  overflowY: "auto",
                  overflowX: "auto",
                }}
              >
                <VideoList
                  onVideoSelect={(video) => this.onVideoSelect(video)}
                  videos={this.state.videos}
                />
              </div>
            </div>
            <div
              className="ui row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h5>Welcome to UTube Found {this.state.videos.length} Results</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
