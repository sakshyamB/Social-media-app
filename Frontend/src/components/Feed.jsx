import React, { useState, useEffect } from "react";
import FeedCard from "./FeedCard"; 
import CreatePost from "./CreatePost"; 
import dummyPosts from "../data/posts";

const Feed = () => {

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");

    if (!savedPosts) return dummyPosts;

    const parsed = JSON.parse(savedPosts);

    if (Date.now() > parsed.expiry) {
      localStorage.removeItem("posts");
      return dummyPosts;
    }

    return parsed.data;
  });

  useEffect(() => {
    const dataToStore = {
      data: posts,
      expiry: Date.now() + 60 * 60 * 1000, 
    };

    localStorage.setItem("posts", JSON.stringify(dataToStore));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="flex-1 mt-3 px-4">
      <CreatePost addPost={addPost} />
      {posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;