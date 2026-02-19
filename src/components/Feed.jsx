import React, { useState } from "react";
import FeedCard from "./FeedCard"; 
import CreatePost from "./CreatePost"; 
import post from "../data/posts";

const Feed = () => {
  const [posts, setPosts] = useState(post);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="flex-1 mt-20 px-4">
      <CreatePost addPost={addPost} />
      {posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
