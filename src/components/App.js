import video from "../data/video.js";
import Video from "./Video.js";
import ToggleComments from "./ToggleComments.js";
import CommentList from "./CommentList.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [toggleComments, setToggleComments] = useState(false);
  console.log(toggleComments);

  function onToggleHandle() {
    setToggleComments(!toggleComments);
  }

  const className = toggleComments ? "none" : "block";

  const toggleText = toggleComments ? "Show Comments" : "Hide Comments";

  return (
    <div className="App">
      <Video video={video} />
      <br />
      <ToggleComments onToggleHandle={onToggleHandle} toggleText={toggleText} />
      <hr />
      <CommentList display={className} video={video} />
    </div>
  );
}

export default App;
