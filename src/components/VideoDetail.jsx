import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video);
    return (
      <div>
        <div className="ui segment">
          <div className="ui embed">
            <iframe title="video player" src={videoSrc} />
          </div>
          <div className="content" style={{ marginTop: "3%" }}>
            <h3 className="header">{video.snippet.title}</h3>
            <h5 className="footer" style={{ marginTop: "0px" }}>
              {video.snippet.channelTitle}
            </h5>

            <p style={{ overflowY: "auto", overflowX: "auto" }}>
              {video.snippet.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
