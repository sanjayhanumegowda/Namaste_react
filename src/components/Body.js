import { useEffect, useState } from "react";

import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0060924&lng=77.65944979999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    const liveData =
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(liveData);
    setFilteredList(liveData);
  };

  // conditional rendering
  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchedList = resList.filter((list) => {
                const name = list.info.name.toLowerCase();
                const query = searchText.trim().toLowerCase();
                console.log(query);
                const result = name.includes(query);
                return result;
              });
              setFilteredList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = resList.filter((res) => {
              if (res.info.avgRating > 4) {
                console.log(res.info.avgRating);
                return res;
              }
            });
            console.log(filteredResList);
            setFilteredList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((resObj) => (
          <Link className="link" to={`/restaurants/`+resObj.info.id} key={resObj.info.id}>
            <RestaurantCard resData={resObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
