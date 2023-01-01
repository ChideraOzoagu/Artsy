import React, { useState } from "react";
import { BsChevronDown, BsArrowRight } from "react-icons/bs";
import Newsletter from '../components/Newsletter'
import Loading from '../components/Loading'
import product1 from '../assets/product-1.png'
import { useFetch } from "../custom hooks/useFetch";

const url = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json'

const Marketplace = () => {
  const {loading, images} = useFetch(url)
  const [showMore, setShowMore] = useState(false)
  const numberOfItems = showMore ? images.products.length : 5;
  // console.log(images.products)
  return (
    <section className="marketplace">
      <div className="nav-location">
        <p className="light-shade">Home/</p>
        <p className="light-shade">Marketplace/</p>
        <p>Editorials</p>
      </div>
      <p className="light-shade">Showing 1-5 of 18 results</p>
      <div className="filter_sort">
        <button className="filter-btn">
          Filters 
          <BsChevronDown/>
        </button>
        <button>
          Sort by
          <BsChevronDown/>
        </button>
      </div>
      <article className="products">
      {
        loading? <Loading/> : (
          images.products.slice(0, numberOfItems).map((item)=>{
            const {id, name, creator, origin, views, price, size, url } = item
            return  <div key={id} className="product-container">
            <img src={url} alt="product" />
            <div className="product-content">
              <h3>{name}</h3>
              <p>${`${price.usd.toFixed(2)}`}</p>
            </div>
          </div>
          })

        )
      }
      </article>
      <button className={`${showMore ? 'hide load_more-btn': 'load_more-btn'}`} onClick={()=>setShowMore(!showMore)}>
       Load more
        <span>
        <BsArrowRight/>
        </span>
      </button>
      <Newsletter/>
    </section>
  );
};

export default Marketplace;
