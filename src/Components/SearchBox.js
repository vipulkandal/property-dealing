import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchBox.css";

export default function SearchBox() {
  return (

    <>
      <div className='row search-box-outer-box'>
        <div className='center'>
          <div className='search-box-li'>
            <li><a href="#buy">Buy</a></li>
            <li><a href="#sell">Sell</a></li>
            <li><a href="#rent">Rent</a></li>
            <li><a href="#pg">PG / Co-living</a></li>
          </div>
          <div className='search-input-div'>
            <input type="text" placeholder="Search.." name="search" autoComplete='off'/>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
