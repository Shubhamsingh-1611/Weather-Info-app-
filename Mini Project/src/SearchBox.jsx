import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import InfoBox from "./InfoBox";


export default function SearchBox({updateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] =useState(false);
    let handelChange = (event)=>{
        setCity(event.target.value);
    };
  
    let API_URL = "http://api.openweathermap.org/data/2.5/weather"
    let API_KEY ="e6ff068be3b7b13edd5112ebe896d97c"
    
        let GetWeather = async()=>{
     try {
       
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse = await response.json();
        console.log(jsonresponse);
        let result = {
            city:city,
            temperature:jsonresponse.main.temp,
            temperatureMin:jsonresponse.main.temp_min,
            temperatureMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLikes:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description,

        }
       
        return result;
    } catch(err) {
     throw err;
    }
};

  let HandelSubmit=async (event)=>{
    try {  
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await GetWeather();
        updateInfo(newInfo)
    } catch(err) {
       setError(true);
    }
};
    
    return(
        <div className="City" style={{textAlign:"center"}}>
        <h1>Weather Information</h1>
        <form onSubmit={HandelSubmit}>
        <TextField id="City" label="City" variant="outlined" value={city} onChange={handelChange}/>
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>
           {error && <p style={{color:"red"}}>No such place Exist</p>}
         
        </form>
        </div>

    )
}