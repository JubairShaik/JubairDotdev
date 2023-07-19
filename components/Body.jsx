import React from "react";
import { Image } from "next/image";
import moment from "moment";
// import '../globals.css'

const Body = ({ post }) => {
  return (
    <div className="bg-hite shadow-lg rounded-lg p-0 lg:p-8 py-12 mb-8">
      <div className="relative shadow-md  max-w-[890px]   inline-block w-full h-60 lg:h-80 mb-6">
        <h1 className=" text-[1.6rem] text-green-500 md:text-[2rem] font-bold ">
          {post.title}
        </h1>

        <div className="flex gap-10">
          <h2 className=" text-gray-400">
            This Post Created on{" "}
            {moment(post.streamDate).format("MMM DD, YYYY")}
          </h2>
        </div>

        <img
          className="shadow-lg  rounded-t-lg  mb-5 lg:rounded-lg"
          src={post.coverimage.url}
          alt=""
        />

        
         
          <span className="inline align-middle text-gray-100  font-medium text-lg">
          Author{" "}<span className="text-red-500" >  {post.guestname}</span>
          </span>
       

        <div
          className="max-w-[890px]"
          dangerouslySetInnerHTML={{ __html: post.description.html }}
        ></div>
        {console.log(post)}
      </div>
    </div>
  );
};

export default Body;
 