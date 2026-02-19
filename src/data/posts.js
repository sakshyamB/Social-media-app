const posts = [
  {
    id: 1,
    user: {
      username: "ram_sharma",
      profilePic: "https://i.pravatar.cc/150?img=1"
    },
    postImage: "https://picsum.photos/600/400?random=1",
    caption: "Morning hike at Shivapuri 🌄",
    likes: 124,
    comments: [
      { id: 1, user: "hari", text: "Beautiful view!" },
      { id: 2, user: "sita", text: "Where is this?" }
    ],
    createdAt: "2 hours ago"
  },
  {
    id: 2,
    user: {
      username: "sita_kc",
      profilePic: "https://i.pravatar.cc/150?img=2"
    },
    postImage: "https://picsum.photos/600/400?random=2",
    caption: "Coffee + coding ☕💻",
    likes: 98,
    comments: [
      { id: 1, user: "ram", text: "Productive!" }
    ],
    createdAt: "3 hours ago"
  },
  {
    id: 3,
    user: {
      username: "tech_nepal",
      profilePic: "https://i.pravatar.cc/150?img=3"
    },
    postImage: "https://picsum.photos/600/400?random=3",
    caption: "New React project UI drop 🚀",
    likes: 201,
    comments: [
      { id: 1, user: "dev", text: "Clean UI" },
      { id: 2, user: "alex", text: "Love this!" }
    ],
    createdAt: "5 hours ago"
  },
  {
    id: 4,
    user: {
      username: "foodie",
      profilePic: "https://i.pravatar.cc/150?img=4"
    },
    postImage: "https://picsum.photos/600/400?random=4",
    caption: "Momo night 😋",
    likes: 340,
    comments: [
      { id: 1, user: "ram", text: "Send location!" }
    ],
    createdAt: "1 day ago"
  },
  {
    id: 5,
    user: {
      username: "traveler",
      profilePic: "https://i.pravatar.cc/150?img=5"
    },
    postImage: "https://picsum.photos/600/400?random=5",
    caption: "Pokhara lakeside vibes 🌊",
    likes: 412,
    comments: [
      { id: 1, user: "sita", text: "Peaceful ❤️" }
    ],
    createdAt: "1 day ago"
  },
  {
    id: 6,
    user: {
      username: "fitness",
      profilePic: "https://i.pravatar.cc/150?img=6"
    },
    postImage: "https://picsum.photos/600/400?random=6",
    caption: "Leg day done 🏋️",
    likes: 87,
    comments: [],
    createdAt: "2 days ago"
  },
  {
    id: 7,
    user: {
      username: "photography",
      profilePic: "https://i.pravatar.cc/150?img=7"
    },
    postImage: "https://picsum.photos/600/400?random=7",
    caption: "Street photography 📸",
    likes: 221,
    comments: [
      { id: 1, user: "alex", text: "Nice click!" }
    ],
    createdAt: "2 days ago"
  },
  {
    id: 8,
    user: {
      username: "student_life",
      profilePic: "https://i.pravatar.cc/150?img=8"
    },
    postImage: "https://picsum.photos/600/400?random=8",
    caption: "Exam week 😭",
    likes: 65,
    comments: [],
    createdAt: "3 days ago"
  },
  {
    id: 9,
    user: {
      username: "nature",
      profilePic: "https://i.pravatar.cc/150?img=9"
    },
    postImage: "https://picsum.photos/600/400?random=9",
    caption: "Sunset lover 🌇",
    likes: 190,
    comments: [
      { id: 1, user: "ram", text: "Amazing colors!" }
    ],
    createdAt: "4 days ago"
  },
  {
    id: 10,
    user: {
      username: "developer",
      profilePic: "https://i.pravatar.cc/150?img=10"
    },
    postImage: "https://picsum.photos/600/400?random=10",
    caption: "Building my social media app 😎",
    likes: 510,
    comments: [
      { id: 1, user: "sita", text: "Keep going!" },
      { id: 2, user: "tech", text: "Future engineer!" }
    ],
    createdAt: "5 days ago"
  }
];

export default posts;
