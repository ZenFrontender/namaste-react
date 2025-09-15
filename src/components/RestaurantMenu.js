import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () =>{

    const {restaurantID} = useParams();

    // useRestrauntMenu hook will pull data from the api and take restrauntId as input  and will return/output restrauntMenu

    const restaurantMenuJson = useRestaurantMenu(restaurantID);

    
    if(restaurantMenuJson===null) return <Shimmer />
    console.log(restaurantMenuJson);
    
   const {name, cuisines, costForTwoMessage} = restaurantMenuJson?.cards[2]?.card?.card.info;

    const {itemCards} = restaurantMenuJson?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;


 

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