import React from "react";
import { Link } from "react-router-dom";
import styledComp from "./styledComponents";
import assets from "../assets/logo";
import { navList } from "./constants";

const { LogoContainer, Header, ListComp } = styledComp;
const { logo, menuIcon } = assets;

const Navbar = () => {
  return (
    <>
      <Header>
        <LogoContainer>
          <Link to="/home">{logo}</Link>
        </LogoContainer>
        <label
          htmlFor="menu-toggle"
          className="pointer-cursor lg:hidden block "
        >
          {menuIcon}
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full lg:h-24"
          id="menu"
        >
          {/* 
          List of navigation links
          @navList is an array of string maped to produce title for each navigation text
           */}
          <nav>
            <ListComp>
              {navList.map(({ title }) => {
                const listStyle =
                  title === "Support"
                    ? "lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                    : "lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2";
                return (
                  <li key={title}>
                    <Link className={listStyle} to="/">
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ListComp>
          </nav>
          {/* TODO: Link to profile if user is logged in */}
          <Link
            to="/"
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
          >
            {/* Sample user profile image icon */}
            <img
              className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
              src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
              alt="holder for user name"
            />
          </Link>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
