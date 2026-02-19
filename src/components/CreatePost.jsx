import React from 'react'
import { useState } from 'react';
const CreatePost = ({addPost}) => {
    const [caption, setcaption] = useState("");
    const [image, setimage] = useState("");
    const handlesubmit =()=> {
        if (!caption && !image) return;
        const newPost ={
            id: Date.now(),
            user: {
                username: "Sakshyam Budhathoki",
                profilePic: "https://i.pravatar.cc/150?img=12"
            },
            postImage : image,
            caption: caption,
            likes : 0,
            comments : [],
        };
        addPost(newPost);
        setcaption("");
        setimage("");
        };
  return (
    <div className='bg-white w-[80%] shadow-md rounded-xl p-4 mb-6 mx-auto'>
        <h2 className='font-semibold mb-3'> Create a Post </h2>
        <input type='text' placeholder='Write a caption...' className='w-full border p-2 rounded mb-3' value={caption} onChange={(e)=> setcaption(e.target.value)}/>
        <input type='text' placeholder='Insert Image link...' className='w-full border p-2 rounded mb-3' value={image} onChange={(e)=> setimage(e.target.value)}/>
        <button onClick={handlesubmit} className='bg-blue-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-500'> Post </button>
    </div>
  )
}

export default CreatePost
