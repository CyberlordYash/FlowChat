import React from "react";

const Message = () => {
  return (
    <div className=" chat chat-end">
      <div className=" chat-image avatar">
        <div className=" w-10 rounded-full">
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
            alt="user avatar"
          ></img>
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        HI! hello hello sun na
      </div>
      <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:12
      </div>
    </div>
  );
};

export default Message;
