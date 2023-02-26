import React from "react";

function Comments({ user, comments }) {
  return (
    <div>
      <h5>{user}</h5>
      <p>{comments}</p>
    </div>
  );
}

export default Comments;
