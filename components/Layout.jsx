import React, { useState } from "react";
import Sticky from "react-stickynode";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStickyChnage = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <React.Fragment>
      <Sticky
        top={0}
        innerZ={1000}
        onStateChange={handleStickyChnage}
        className="w-full"
      >
        <Navbar isSticky={isSticky} />
      </Sticky>
      {/* <SideNav /> */}
      {/* className="px-1 md:px-3 lg:px-5" */}
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
