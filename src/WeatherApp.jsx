import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){

    const[weatherInfo, setWeatherInfo]= useState({
        city: "Mumbai",
        feelsLIke: 25.95,
        humidity: 77,
        maxTemp: 25.59,
        minTemp: 24.45,
        temp: 25.35,
        weather: "mist"
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div style={{textAlign:"center",justifyContent:"center"   }}>
            <h1>Weather app by Wangel</h1>
            <SearchBox updateInfo={updateInfo}/> <hr />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}