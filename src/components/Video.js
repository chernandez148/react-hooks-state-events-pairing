import React from "react";
import VoteButtons from "./VoteButtons";

function Video({ video }) {
  return (
    <div className="video">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <span>{`${video.views} Views | Uploaded ${video.createdAt}`}</span>
      <VoteButtons video={video} />
    </div>
  );
}

export default Video;
