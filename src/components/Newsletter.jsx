import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <footer className="newsletter">
      <div className="newsletter-container">
        <h2 className="newsletter-title">NEWSLETTER</h2>
        <p className="newsletter-subscribe">
          SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
        </p>
        <input type="email" className="newsletter-email" placeholder="ENTER YOUR EMAIL HERE" required />
        <button className="newsletter_subscribe-btn" type="submit">SUBSCRIBE</button>
      </div>
      <div className="contact-us">
          <div className="logo">ARTSY.</div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/marketplace'>Marketplace</Link>
            </li>
            <li>
              <Link to='/auctions'>Auctions</Link>
            </li>
            <li>
              <Link to='/drops'>Drops</Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
            <a href="#">Wallets</a>
            </li>
            <li>
            <a href="#">Rates</a>
            </li>
            <li>
            <a href="#">High bids</a>
            </li>
          </ul>
        <p className="reach_us">REACH US</p>
        <div>
          <div className="contact-details">
            <AiOutlineMail />
            <p>artsystudios@gmail.com</p>
          </div>
          <div className="contact-details">
            <GoLocation />
            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Newsletter;
