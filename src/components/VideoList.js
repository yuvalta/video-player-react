import "./VideoList.css";
import React from "react";
import VideoCard from "./VideoCard";

const VideoList = (props) => {
  const videos = props.videos.map((video) => {
    return (
      <VideoCard
        key={video.id}
        title={video.snippet.title}
        url={video.snippet.thumbnails.medium.url}
      />
    );
  });

  return <div style={{ marginTop: "10px" }}>{videos}</div>;
};

export default VideoList;
