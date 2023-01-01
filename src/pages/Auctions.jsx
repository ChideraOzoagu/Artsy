import React, { useRef, useState } from "react";
import auctionItem1 from "../assets/auction-item1.png";
import auctionItem2 from "../assets/auction-item2.png";
import { MdFavorite } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { useFetch } from "../custom hooks/useFetch";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Loading from "../components/Loading";

const url =
  "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/auction.json";
const Auctions = () => {
  const { loading, images } = useFetch(url);
  const [favorite, setFavorite] = useState(false);
  return (
    <section className="auctions">
      <div className="auction-slider">
        <p className="auction_text">
          Here's an overview of products actively on auction, explore!
        </p>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          loop={true}
          pagination={{
            bullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {loading ? (
            <Loading />
          ) : (
            images.products.map((img) => {
              return (
                <SwiperSlide key={img.id}>
                  <img src={img.url} alt="" />
                  <p className="countdown-text">6hr:40mins:15s</p>
                </SwiperSlide>
              );
            })
          )}
         
        </Swiper>
      </div>
      <div className="auction-container">
        <h3 className="top_bids">Top bids from popular creators </h3>
        <div className="auction-item">
          <div className="auction_img-container">
            <div className="heart-container">
              <MdFavorite
                className={` ${
                  favorite ? " red-fav heart-icon" : "heart-icon"
                }`}
                onClick={() => setFavorite(!favorite)}
              />
            </div>
            <img src={auctionItem1} alt="" />
            <div className="text">
              <h3>Out of the box</h3>
              <h3>0.57ETH</h3>
            </div>
          </div>
          <div className="creator">
            <p className="creator-name">
              Creator: <span>Jacob Banks</span>
            </p>
            <p>
              Date: <span>12/08/22</span>
            </p>
          </div>
          <div className="bid">
            <div>
              <p>Current bid</p>
              <h3>0.987ETH</h3>
            </div>
            <button>Place bid</button>
          </div>
        </div>
        <div className="auction-item">
          <div className="auction_img-container">
            <div className="heart-container">
              <MdFavorite
                className={` ${
                  favorite ? " red-fav heart-icon" : "heart-icon"
                }`}
                onClick={() => setFavorite(!favorite)}
              />
            </div>
            <img src={auctionItem2} alt="" />
            <div className="text">
              <h3>Out of the box</h3>
              <h3>0.57ETH</h3>
            </div>
          </div>
          <div className="creator">
            <p className="creator-name">
              Creator: <span>Jacob Banks</span>
            </p>
            <p>
              Date: <span>12/08/22</span>
            </p>
          </div>
          <div className="bid">
            <div>
              <p>Current bid</p>
              <h3>0.987ETH</h3>
            </div>
            <button>Place bid</button>
          </div>
        </div>
      </div>
      {/* <button className="auction_load-more">
        Load more
        <span>
          <BsArrowRight />
        </span>
      </button> */}
    </section>
  );
};

export default Auctions;
