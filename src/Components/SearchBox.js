import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchBox.css";

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  let navigate = useNavigate ();

  const handleSearch = (e) => {
    navigate("/PropertyList", {state: searchQuery});
  }
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
            <input type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search.." name="search" autoComplete='off' />
            <button type="submit" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
