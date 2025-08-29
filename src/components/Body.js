import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";



const Body = () =>{
    

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5058942&lng=77.3825964&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    if(listOfRestaurants.length==0){
        return <h1>Loading ...</h1>
    }

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    console.log("filter btn clicked");
                    const finalListOfRestaurants=
                    listOfRestaurants.filter((restaurant)=>restaurant.info.avgRating>4)
                    setListOfRestaurants(finalListOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">

                {
                    listOfRestaurants.map((res)=><RestaurantCard key={res.info.id} resData={res} />)
                }

                
                
            </div>
        </div>
    )
}


export default Body;