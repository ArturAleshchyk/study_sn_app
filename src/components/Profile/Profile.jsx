import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="#" alt=""/>image
      </div>
      <div>avatar + description</div>
      <MyPosts/>
    </div>
  )
}

export default Profile;