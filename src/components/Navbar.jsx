import React from "react";
import { HiX } from "react-icons/hi";
import { BsChatLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const navigation = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Marketplace",
    link: "/marketplace",
  },
  {
    text: "Auctions",
    link: "/auctions",
  },
  {
    text: "Drops",
    link: "/drops",
  },
];
const Navbar = ({ showNav, setShowNav }) => {
  return (
    <nav className={`${showNav ? "nav-mobile show-nav" : "nav-mobile"}`}>
      <div className="nav-header">
        <div className="logo">
          <a href="/">ARTSY.</a>
        </div>

        <button className="nav-close" onClick={() => setShowNav(false)}>
          <HiX />
        </button>
      </div>
      <div className="nav-container">
        {navigation.map((nav, index) => {
          const { text, link } = nav;
          return (
            <Link to={link} key={index} onClick={()=>setShowNav(false)}>
              {text}
            </Link>
          );
        })}
      </div>
      <button className="chat_with_us-btn">
        <BsChatLeftFill />
      </button>
    </nav>
  );
};

export default Navbar;
