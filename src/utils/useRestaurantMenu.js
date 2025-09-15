import { restrauntMenuApi } from "./constants";
import { useEffect, useState } from "react";


const useRestarauntMenu = (restaurantID=79571) =>{

     const [resInfo, setResInfo] = useState(null);

     useEffect(()=>{
        fetchData();
        
    },[])

    const fetchData = async () =>{
        const firstRes = await fetch(`${restrauntMenuApi}${restaurantID}`);

        const json = await firstRes.json();
        setResInfo(json.data)
        console.log(json);
        
    }
    // {resInfo?.cards}
    return resInfo;

    

}

export default useRestarauntMenu; 