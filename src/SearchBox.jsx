import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';




export default function SearchBox({updateInfo}){
    let [city, setCity]= useState("");
 let [error, setError]= useState(false)
  const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY= "3884c37bddb9b12ba287c72b2882951d"

let getWeatherInfo= async ()=>{
  try{
    let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonResponse=  await response.json();

  let result= {
    city: city,
    temp: jsonResponse.main.temp,
    minTemp: jsonResponse.main.temp_min,
    maxTemp: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.humidity,
    feelsLIke: jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].description,

  }
  console.log(result);
  return result
  }catch(err){
    throw error
  }
}

    
    let handleChange=  (event)=>{
        setCity(event.target.value);
     }

    let handleSubmit= async(event) =>{
     try{   console.log(city);
        event.preventDefault();
        setCity("");
        setError(false);
     let newInfo= await  getWeatherInfo();
        updateInfo(newInfo)
    }catch(err){
     setError(true);
     
    }
    }
    return(
        <div className='searchBox'>
            
            <form onSubmit={handleSubmit} >
                <label htmlFor="city">Enter city Name</label><br />
            <TextField id="city" label="city name" variant="outlined"  value={city}
            onChange={handleChange}  required/><br /><br />

            <Button variant="outlined" type='submit' onClick={handleSubmit}>Search</Button>
            {error && <p style={{backgroundColor:"red"}}>No city found</p>}
            </form>
        </div>
    )
}