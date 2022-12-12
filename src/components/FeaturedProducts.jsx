import React from "react";
import { BsArrowRight } from "react-icons/bs";
import heroImg2 from "../assets/img2.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import { useFetch } from "../custom hooks/useFetch";
import Loading from "./Loading";
const url =
  "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json";

const FeaturedProducts = () => {
  const { loading, images } = useFetch(url);
  // console.log(images);
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      {loading ? (
        <Loading />
      ) : (
        images.featured_products.map((featured) => {
          return (
              <div className="single-product" key={featured.id}>
                <div className="featured-img-container">
                  <img src={featured.url} alt="" />
                  <h3>Boolean Egyptian</h3>
                  <button className="single-product-btn">
                    <BsArrowRight />
                  </button>
                </div>
                <p className="single-product_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  totam, ipsa facere tenetur necessitatibus error repudiandae!
                  Cumque veritatis at officiis.
                </p>
                <div className="contributors">
                  <div>
                    <img src={avatar1} alt="" />
                    <img src={avatar2} alt="" />
                    <img src={avatar3} alt="" />
                    <img src={avatar4} alt="" />
                    <img src={avatar5} alt="" />
                  </div>
                  <p>64 major contributors</p>
                </div>
              </div>
          );
        })
      )}
      <div className="single-product">
        <div className="featured-img-container">
          {/* <img src={heroImg2} alt="" /> */}
          {/* <h3>Boolean Egyptian</h3>
          <button className="single-product-btn">
            <BsArrowRight />
          </button>
        </div>
        <p className="single-product_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam, ipsa facere tenetur necessitatibus error repudiandae! Cumque veritatis at officiis.</p>
        <div className="contributors">
            <div>
                <img src={avatar1} alt="" />
                <img src={avatar2} alt="" />
                <img src={avatar3} alt="" />
                <img src={avatar4} alt="" />
                <img src={avatar5} alt="" />
            </div>
            <p>64 major contributors</p> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
