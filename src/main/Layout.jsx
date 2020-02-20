import React from "react";
import Proptypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styledComp from "./styledComponents";

const { BodyWrapper } = styledComp;

// eslint-disable-next-line import/prefer-default-export
export const Layout = ({ children }) => {
  // const [name, setUsername] = useState("");

  return (
    <>
      <Navbar />
      {/* <BodyWrapper className="container">{children}</BodyWrapper> */}
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: Proptypes.element.isRequired
};
