import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
const FeedCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-xl shadow-md mb-6 max-w-xl mx-auto">
      <div className="flex items-center gap-3 p-4">
        <img
          src={post.user.profilePic}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{post.user.username}</p>
          <p className="text-xs text-gray-500">{post.createdAt}</p>
        </div>
      </div>
      <img
        src={post.postImage}
        alt="post"
        className="w-full max-h-[500px] object-cover"
      />
      <div className="p-4">
        <div className="flex gap-4 mb-2">
          <button onClick={handleLike}>
            <FaHeart
              className={`cursor-pointer ${
                liked ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
          <MdMessage className="cursor-pointer text-gray-600" />
        </div>
        <p className="font-semibold">{likes} likes</p>
        <p className="mt-1">
          <span className="font-semibold mr-2">
            {post.user.username}
          </span>
          {post.caption}
        </p>
         <p
          className="text-sm text-gray-500 mt-2 cursor-pointer"
          onClick={() => setShowComments(!showComments)}
        >
          View all {post.comments.length} comments
        </p>
               {showComments && (
          <div className="mt-3 border-t pt-2">
            {post.comments.map((comment) => (
              <p key={comment.id} className="text-sm mb-1">
                <span className="font-semibold mr-2">
                  {comment.user}
                </span>
                {comment.text}
              </p>
            ))}</div>)}
      </div>
    </div>
  );
};

export default FeedCard;
