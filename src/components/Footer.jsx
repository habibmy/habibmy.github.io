import React from "react";

export const Footer = () => {
  return (
    <div className="py-5 flex flex-col items-center">
      <p className=" text-gray-500 text-xs">
        &copy; 2021. All rights reserved.
      </p>
      <div className="">
        <span> made with ❤️ by </span>
        <a href="https://gh.ahmadullah.in" className="text-blue-500">
          @aumirza
        </a>
      </div>
    </div>
  );
};
