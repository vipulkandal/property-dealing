import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./property-listing.css";


export default function PropertyList() {

  const propertyListingData = [
    {
      id: 1,
      city: "chandigarh",
      sale_type: "sell",
      imageURL: "myPc",
      address: "sector 21-A",
      no_of_rooms: "3",
      price: " 70 Lakhs",
      description: "Something something",
      date_of_posting: "06/10/2009"
    },
    {
      id: 2,
      city: "delhi",
      sale_type: "buy",
      imageURL: "url",
      address: "sector 21-A",
      no_of_rooms: "2",
      price: " 50 Lakhs",
      description: "The furnishings include 1modular kitchen1wardrobe.It has 3 balconies. This flat has a super built up area of 1330 sq.Ft. And is north-East facing.  It has cement flooring. This pool, park/garden, club and main road overlooking flat is on the 1st floor of 18 floors. This is a corner property with 100.00 sq.Ft. Facing road. It also has a pooja room.  The society offers full power back up.   You get 2 covered parking and 2 open parking. It is inside gated premises. With a strategic location and a number of amenities for buyers/residents, this flat is priced at rs 61.5 lac. (Rs. 4624.00 per sq.Ft.)(Price negotiable) some other price inclusions include rs. 300000.00 as booking amount and rs 300000.00 as brokerage amount (Fixed). The water source is from borewell/tank.  This is a freehold property.",
      date_of_posting: "21/12/2019"
    },
    {
      id: 3,
      city: "mumbai",
      sale_type: "buy",
      imageURL: "url",
      address: "sector 21-A",
      no_of_rooms: "2",
      price: " 50 Lakhs",
      description: "The furnishings include 1modular kitchen1wardrobe.It has 3 balconies. This flat has a super built up area of 1330 sq.Ft. And is north-East facing.  It has cement flooring. This pool, park/garden, club and main road overlooking flat is on the 1st floor of 18 floors. This is a corner property with 100.00 sq.Ft. Facing road. It also has a pooja room.  The society offers full power back up.   You get 2 covered parking and 2 open parking. It is inside gated premises. With a strategic location and a number of amenities for buyers/residents, this flat is priced at rs 61.5 lac. (Rs. 4624.00 per sq.Ft.)(Price negotiable) some other price inclusions include rs. 300000.00 as booking amount and rs 300000.00 as brokerage amount (Fixed). The water source is from borewell/tank.  This is a freehold property.",
      date_of_posting: "21/12/2019"
    },
    {
      id: 3,
      city: "chandigarh",
      sale_type: "buy",
      imageURL: "url",
      address: "sector 21-A",
      no_of_rooms: "2",
      price: " 50 Lakhs",
      description: "The furnishings include 1modular kitchen1wardrobe.It has 3 balconies. This flat has a super built up area of 1330 sq.Ft. And is north-East facing.  It has cement flooring. This pool, park/garden, club and main road overlooking flat is on the 1st floor of 18 floors. This is a corner property with 100.00 sq.Ft. Facing road. It also has a pooja room.  The society offers full power back up.   You get 2 covered parking and 2 open parking. It is inside gated premises. With a strategic location and a number of amenities for buyers/residents, this flat is priced at rs 61.5 lac. (Rs. 4624.00 per sq.Ft.)(Price negotiable) some other price inclusions include rs. 300000.00 as booking amount and rs 300000.00 as brokerage amount (Fixed). The water source is from borewell/tank.  This is a freehold property.",
      date_of_posting: "21/12/2019"
    },
  ]

  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();
  const searchQuery = location.state;

  useEffect(() => {
    let result = propertyListingData.filter(propertyListingData => propertyListingData.city === searchQuery);
    console.log(result);
    setSearchResult(result);
  }, []);

  return (
    <>
      <h1>This is PropertyList</h1>

      <div className='container'>
        <div className=''>
          {
            searchResult.length ? searchResult.map(item => <div className='search-grid' key={item.id}>
              <p>{item.id}</p>
              <p>{item.city}</p>
              <p>{item.imageURL}</p>
              <p>{item.address}</p>
              <p>{item.no_of_rooms}</p>
              <p>{item.description}</p>
              <p>{item.date_of_posting}</p>
            </div> ): <p>No data found</p>
          }
        </div>
      </div>




    </>
  )
}
