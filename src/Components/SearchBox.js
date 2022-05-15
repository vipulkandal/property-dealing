import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchBox.css";
import PropertyList from '../pages/property-listing';

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setsearchType] = useState("buy");
  const [showSearchResult, setShowSearchResult] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSearchResult(true);
  }

  // search type: buy, sell , rent , PG
  const searchTypeHandler = (e)=>{

  }
  return (
    <>
      <div className='row search-box-outer-box'>
        <div className='center'>
          <div className='search-box-li' onClick={(e)=> searchTypeHandler(e)}>
            <li>Buy</li>
            <li>Sell</li>
            <li>Rent</li>
            <li>PG / Co-living</li>
          </div>
          <form onSubmit={(e)=>handleSearch(e) } className='search-input-div'>
            <input type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search.." name="search" autoComplete='off' />
            <button type="submit"  >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        {
          showSearchResult ? <PropertyList searchQuery={searchQuery}/> : ""
        }
          
      </div>
    </>
  )
}
