import React from 'react';
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.post}>
      <img src="https://cdn-icons-png.flaticon.com/512/80/80889.png" alt="avatar"/>
      Post
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post;