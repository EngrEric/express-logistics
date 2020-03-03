import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full text-center border-t border-grey p-4 pin-b">
               <p className="flex justify-start">contact us</p>
            <div className="flex justify-start bg-blue-400 text-white h-100px mt-100px">
            <i className="fa fa-twitter"> follow us on twitter</i>
            </div>
            <p className="bg-gray-400">2020 all rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
