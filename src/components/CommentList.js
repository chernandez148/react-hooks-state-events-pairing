import React from "react";
import Comments from "./Comments";

function CommentList({ video, display }) {
  const videoData = video.comments.map((comments) => {
    return (
      <Comments
        key={comments.id}
        user={comments.user}
        comments={comments.comment}
      />
    );
  });
  const numOfCOmments = video.comments.length;
  return (
    <div className={display}>
      <h3>{numOfCOmments} Comments</h3>
      {videoData}
    </div>
  );
}

export default CommentList;
