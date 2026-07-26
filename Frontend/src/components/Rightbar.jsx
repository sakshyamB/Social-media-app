import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { ImCross } from "react-icons/im";
const Rightbar = ({ isrightsidebaropen, setisrightsidebaropen }) => {
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) {
        setisrightsidebaropen(true);
      } else {
        setisrightsidebaropen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setisrightsidebaropen]);

  const [showparagraph, setshowparagraph] = useState(false);
  const [showparagraph1, setshowparagraph1] = useState(false);
  const [paragraph, setparagraph] = useState("");
  const [paragraph1, setparagraph1] = useState("");

  const handleaccept = () => {
    setshowparagraph(true);
    setparagraph("You have accepted the friend request");
  };
  const handlereject = () => {
    setshowparagraph(true);
    setparagraph("You have rejected the friend request");
  };
  const handleaccept1 = () => {
    setshowparagraph1(true);
    setparagraph1("You have accepted the friend request");
  };
  const handlereject1 = () => {
    setshowparagraph1(true);
    setparagraph1("You have rejected the friend request");
  };
  return (
    <div
      className={`${isrightsidebaropen ? 'w-[80%] md:w-[35%] lg:w-[30%]' : 'w-0'} h-screen fixed right-0 top-0 mt-22 overflow-hidden border-l-[1px] bg-gray-300 text-50 flex-row transition-all duration-300`}
    >
      <div className="flex text-xl items-center md:hidden flex-row-reverse pt-1 pr-5">
        <ImCross
          onClick={() => setisrightsidebaropen(false)}
          className="text-red-500 cursor-pointer"
        />
      </div>
      <div className="bg-white shadow-2xl">
        <p> Friend Request</p>
        <div className="flex w-fit items-center">
          {showparagraph ? (
            <p>{paragraph}</p>
          ) : (
            <>
              <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
              <h1 className="font-bold cursor-pointer"> Ram K.c </h1>
              <button
                onClick={handleaccept}
                className="bg-blue-500 cursor-pointer px-1 ml-[50px] w-fit rounded-sm border-[1px] text-white"
              >
                Accept
              </button>
              <button
                onClick={handlereject}
                className="cursor-pointer bg-red-500 ml-2 px-1 w-fit rounded-sm border-[1px] text-white"
              >
                Decline
              </button>
            </>
          )}
        </div>
        <div className="flex items-center">
          {showparagraph1 ? (
            <p>{paragraph1}</p>
          ) : (
            <>
              <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
              <h1 className="font-bold cursor-pointer"> Shyam Maharjan </h1>
              <div></div>
              <button
                onClick={handleaccept1}
                className=" cursor-pointer bg-blue-500 px-1 ml-[50px] w-fit rounded-sm border-[1px] text-white"
              >
                Accept
              </button>
              <button
                onClick={handlereject1}
                className="cursor-pointer bg-red-500 px-1 ml-2 w-fit rounded-sm border-[1px] text-white"
              >
                Decline
              </button>
            </>
          )}
        </div>
      </div>
      <div className="bg-white shadow-2xl mt-4">
        <p> Latest Events</p>
        <div className="flex w-fit">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer">Crystal K.c</h1> &nbsp;
          <p> has posted a new photo. </p>
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer"> Shiva Kumar </h1> &nbsp;
          <p> liked your post. </p>
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer">Zuna Rai </h1> &nbsp;
          <p> replied to your comment. </p>
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer"> Mahesh Basnet </h1> &nbsp;
          <p> invited you to a group. </p>
        </div>
      </div>
      <div className="bg-white shadow-2xl mt-4">
        <p> Friends online</p>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer"> Rama K.c </h1> &nbsp;
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer"> Prabesh Paudel </h1> &nbsp;
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer"> Shraddha Bhattrai </h1>{" "}
          &nbsp;
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer"> Aaarogya Mahat </h1> &nbsp;
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer"> Sunil Sharma </h1> &nbsp;
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer"> Mahesh Basnet </h1> &nbsp;
        </div>
        <div className="flex w-fit items-center">
          <CgProfile className="text-blue-400 cursor-pointer mx-2 text-xl sm:text-2xl bold my-2" />
          <h1 className="font-bold cursor-pointer "> Zuna Rai </h1> &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
