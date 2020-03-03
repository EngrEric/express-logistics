import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full text-center border-t border-grey pin-b">
               <p className="flex justify-start pl-5 ">contact us</p>
            <div className="flex justify-start bg-blue-400 text-white h-100px mt-100px">
            <i className="fa fa-twitter pl-3"> follow us on twitter</i>
            </div>
            <div className="bg-blue-400 text-white h-100px">
            <i className="fa fa-copyright"> 2020 all rights reserved</i>
            </div>
      </footer>
    </div>
  );
};

export default Footer;
