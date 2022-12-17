import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
const Marketplace = () => {
  return (
    <section className='marketplace'>
<div className="marketplace_filter">
  <input type="text" className='search' />
  <div className="marketplace_sort">
    <p>See 1-6 of 15 results</p>
    <button className="sort-btn">Sort by 
    <BsChevronDown/>
    </button>
  </div>
</div>
    </section>
  )
}

export default Marketplace
