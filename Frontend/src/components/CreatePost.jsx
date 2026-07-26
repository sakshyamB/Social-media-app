import React from 'react'
import { useState } from 'react';
const CreatePost = ({ addPost }) => {
    const [caption, setcaption] = useState("");
    const [preview, setpreview] = useState(null);
    const handlefilechange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setpreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handlesubmit = () => {
        if (!caption && !preview) return;
        const newPost = {
            id: Date.now(),
            user: {
                username: "Sakshyam Budhathoki",
                profilePic: "https://i.pravatar.cc/150?img=12"
            },
            postImage: preview,
            caption: caption,
            image: preview,
            likes: 0,
            comments: [],
        };
        addPost(newPost);
        setcaption("");
        setpreview(null);
    };
    return (
        <div className='bg-white w-[80%] shadow-md top-0 rounded-xl p-4 mb-4 mx-auto'>
            <h2 className='font-semibold mb-3'> Create a Post </h2>
            <input type='text' placeholder='Write a caption...' className='w-full border p-2 rounded mb-3' value={caption} onChange={(e) => setcaption(e.target.value)} />
            <input type='file' accept='image/*' onChange={handlefilechange} className=' w-[50%] border-2 px-2 py-1 rounded' />
            <button onClick={handlesubmit} className='bg-blue-400 mx-2 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-500'> Post </button>
        </div>
    )
}

export default CreatePost
