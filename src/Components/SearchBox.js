import React from 'react'
import "./SearchBox.css";

export default function SearchBox() {
  return (
    <>
      <div className='row search-box-outer-box'>
        <div className='center'>
          <div>
            <li><a href="#buy">Buy</a></li>
            <li><a href="#sell">Sell</a></li>
            <li><a href="#rent">Rent</a></li>
            <li><a href="#pg">PG / Co-living</a></li>
          </div>
        </div>
      </div>

    </>
  )
}
