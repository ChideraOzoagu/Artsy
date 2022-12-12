import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Navbar from "./Navbar";

const Header = () => { 
    const [showNav, setShowNav] = useState(false)
  return (
    <>
      <header>
        <button className="nav-btn" onClick={()=>setShowNav(true)}>
          <SlMenu />
        </button>
        <div className="logo"><a href="/">ARTSY.</a></div>
        <div>
          <button className="search-btn">
            <BiSearch />
          </button>
          <button className="cart-btn">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </header>
        <Navbar showNav={showNav} setShowNav={setShowNav} />
    </>
  );
};

export default Header;
