import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import {restrauntMenuApi} from "../utils/constants"

import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

    const {restaurantID} = useParams();

   console.log(restaurantID);
   

    const [restaurantMenuJson, setRestaurantMenuJson] = useState(null);

    useEffect(()=>{
        fetchRestaurantMenu()
    },[])

    const fetchRestaurantMenu = async () =>{
        const firstRes = await fetch(`${restrauntMenuApi}${restaurantID}`);

        const restaurantJsonData = await firstRes.json();
        const resMenu = restaurantJsonData?.data
       setRestaurantMenuJson(resMenu);
       
       console.log(resMenu);
    //    console.log("Usefetch called");
    }

    if(restaurantMenuJson===null) return <Shimmer />

   const {name, cuisines, costForTwoMessage} = restaurantMenuJson?.cards[2]?.card?.card.info;

    const {itemCards} = restaurantMenuJson?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

console.log(itemCards);




   
   

return(
    <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            
           {itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.defaultPrice/10||item.card.info.price/10}</li>))} 
            
        </ul> 
    </div>
)


}

export default RestaurantMenu;