import React, { useState } from "react";

function VoteAndHideCommentsButton({ video }) {
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);

  function onUpVote() {
    const newUpVote = upVotes + 1;
    setUpVotes(newUpVote);
  }

  function onDownVote() {
    const newDownVote = downVotes + 1;
    setDownVotes(newDownVote);
  }

  return (
    <div>
      <br />
      <button onClick={onUpVote}>{upVotes} 👍</button>
      <button onClick={onDownVote}>{downVotes} 👎</button>
    </div>
  );
}

export default VoteAndHideCommentsButton;
