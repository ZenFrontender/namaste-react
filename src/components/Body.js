import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5759152&lng=77.35734479999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
    
  };

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-filter">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchVal.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("filter btn clicked");
            const finalListOfRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurants(finalListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((res) => {
          
          return(<Link key={res.info.id} to={`/restaurant/${res.info.id}`}  className="restaurant-links">
           <RestaurantCard  resData={res} />;
          </Link>)
        })}
      </div>
    </div>
  );
};

export default Body;
