import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>My posts
      <div>
        <textarea></textarea>
        <br/>
        <button>Submit</button>
      </div>
      <div>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default MyPosts;