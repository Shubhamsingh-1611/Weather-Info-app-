import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        tempertaure:25.05,
        temperatureMin :25.05,
        temperatureMax :25.05,
        humidity:47,
        feelslike:28.84,
        weather:"haze"

    });
   
    let UpdateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
           
            <div style={{display:"flex",alignItems:"center", flexDirection:"column"}}>
            <h2>Weather APP by Delta</h2>
            <SearchBox updateInfo={UpdateInfo}/>
            <InfoBox info={weatherInfo}/>
            </div>
        </div>
    )
}