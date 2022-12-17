import React from "react";
// react router
import { Link } from "react-router-dom";
// react icons
import { BsArrowRight } from "react-icons/bs";
// images
import heroImg1 from "../assets/img1.png";
import heroImg2 from "../assets/img2.png";
import heroImg3 from "../assets/img3.png";
import topCreator1 from "../assets/top-creator-1.png";
import topCreator2 from "../assets/top-creator-2.png";
import topCreator3 from "../assets/top-creator-3.png";
import gallery from '../assets/art-gallery.jpg'

import { useFetch } from "../custom hooks/useFetch";

import FeaturedProducts from "../components/FeaturedProducts";
import Loading from "../components/Loading";
import Newsletter from "../components/Newsletter";

const urlCarousel =
  "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/carousel.json";
const Home = () => {
  const { loading, images } = useFetch(urlCarousel);
  return (
    <main>
      <section className="first-section">
        <p className="main_paragraph-1">
          Photography is poetry and beautiful untold stories
        </p>
        <p className="main_paragraph-2">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
        <div className="hero-mobile">
          <img src={heroImg1} alt="hero" />
          <img src={heroImg3} alt="hero" />
          <img src={heroImg2} alt="hero" />
        </div>
        <div className="carousel-container">
          {loading ? (
            <Loading />
          ) : (
            images.carousel.map((image) => {
              const { id, url } = image;
              return <img src={url} alt="carousel" key={id} />;
            })
          )}
        </div>
      </section>
      <FeaturedProducts />
      <section className="home-gradient">
        <div className="bg-monalisa">
          {/* <img src={gallery} alt="" /> */}
          <div>
            <div className="circle"></div>
            <p>MONALISA REDEFINED IN STYLE.</p>
          </div>
          <div>
            <h3>01</h3>
            <p>Start on : 08:00 GTS . Monday </p>
            <p>
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
          </div>
        </div>
      </section>
      <div>
        <Link className="home_nav" to="/marketplace">
          Explore marketplace
          <button>
            <BsArrowRight />
          </button>
        </Link>
        <Link className="home_nav" to="/auctions">
          See autions
          <button>
            <BsArrowRight />
          </button>
        </Link>
      </div>
      <section className="top-creators">
        <div className="top-creators_topics">
          <div>
            <div className="circle"></div>
            <small>Fashion</small>
          </div>
          <div>
            <div className="circle"></div>
            <small>Lifestyle</small>
          </div>
          <div>
            <div className="circle"></div>
            <small>Editorials</small>
          </div>
          <div>
            <div className="circle"></div>
            <small>Blueprint</small>
          </div>
        </div>
        <h2 className="top-creators_title">TOP CREATORS OF THE WEEK</h2>
        <p className="top-creators_text">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <img src={topCreator1} alt="" className="top-creators_img"/>
        <h2 className="lg-text">CIRCA</h2>
        <h2 className="lg-text-2x">1985</h2>
      </section>
      <Newsletter/>
    </main>
  );
};

export default Home;
