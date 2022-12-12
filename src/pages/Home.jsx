import React, { useState } from 'react'
import heroImg1 from '../assets/img1.png'
import heroImg2 from '../assets/img2.png'
import heroImg3 from '../assets/img3.png'
import { useFetch } from '../custom hooks/useFetch'
import FeaturedProducts from '../components/FeaturedProducts'
import Loading from '../components/Loading'
const urlCarousel = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/carousel.json'
const Home = () => {
const {loading, images} = useFetch(urlCarousel)
  return (
    <main>
      <section className='first-section'>
        <p className='main_paragraph-1'>Photography is poetry and beautiful untold stories</p>
        <p className='main_paragraph-2'>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
        <div className="hero-mobile">
          <img src={heroImg1} alt="hero" />
          <img src={heroImg3} alt="hero" />
          <img src={heroImg2} alt="hero" />
        </div>
        <div className="carousel-container">
          {
            loading ? <Loading/> : images.carousel.map((image)=> {
              const {id, url} = image
              return <img src={url} alt="carousel" key={id} />
            })
          }
        </div>
      </section>
      <FeaturedProducts/>
    </main>
  )
}

export default Home
