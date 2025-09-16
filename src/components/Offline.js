import offlineImg from "../assets/Offline_BG.jpeg"
import { offline_img } from "../utils/constants";

const Offline = () =>{

    // console.log(offlineImg);
    
    return(
        <div className="offline-comp">
            <h1>Looks like you are offline</h1>
            <img className="offline-img" src={`${offline_img}`} />
           {/* <img src="../assets/Offline_BG.jpeg" className="offline-img" />  */}
        </div>
    )
}


export default Offline;