import React from "react";
import { BsChevronDown } from "react-icons/bs";
import dropsItem1 from "../assets/drops-item1.png";

const Drops = () => {
  return (
    <section className="drops">
      <div className="notify_me">
        <h2>Upcoming drops</h2>
        <p>You may turn on notifications so that no drop will miss you.</p>
        <button>Notify me</button>
      </div>
      <div className="sort">
        <p>Sort by</p>
        <BsChevronDown />
      </div>
      <div className="upcoming-drops">
        <div className="single-drop">
          <div className="drops_img-container">
            <img src={dropsItem1} alt="" />
            <p className="drops_tag upcoming">UPCOMING</p>
            <div className="drops_timer">
              <p>Time remaining</p>
              <p>06 hrs: 45mins: 22s</p>
            </div>
          </div>
          <div className="drops_text-content">
            <p>November 21 at 11 am WAT</p>
            <h3>Eyo : Eko For Show</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
            <h3>Creator: <span>Aliya Minat</span></h3>
            <p className="notified">Get notified</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drops;
