import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import Navbar from "./Navbar";
import { navigation } from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header>
        <button className="nav-btn" onClick={() => setShowNav(true)}>
          <SlMenu />
        </button>
        <div className="logo">
          <a href="/">ARTSY.</a>
        </div>
        <nav className="nav-desktop">
          {
            navigation.map((nav, index)=>{
              return <NavLink className={({isActive}) => (isActive ? 'active link': 'link')} to={nav.link} key={index}>{nav.text}</NavLink>
            })
          }
        </nav>
        <div>
          <button className="search-btn">
            <BiSearch />
          </button>
          <button className="cart-btn">
            <AiOutlineShoppingCart />
          </button>
          <button className="notification-btn">
            <HiOutlineBell />
          </button>
        </div>
      </header>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
    </>
  );
};

export default Header;
