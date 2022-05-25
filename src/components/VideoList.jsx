import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video, index) => (
    <VideoItem
      key={index}
      video={video}
      onVideoSelect={(video) => onVideoSelect(video)}
    />
  ));
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
