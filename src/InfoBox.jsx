import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css"
import Typography from '@mui/material/Typography';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';

export default function InfoBox({info}){
let SUN_URL="https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
let Rain_URL="https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   
let Cold_URL="https://media.istockphoto.com/id/512978969/photo/darjeeling-town-and-tea-plantation-with-himalaya-mountains.jpg?s=1024x1024&w=is&k=20&c=HfkN8vO_JVW0ESFRCtb9a0W5c0U0XQmXpfhsQ-3dBT8=" 
let Icy_URL="https://media.istockphoto.com/id/501388306/photo/winter-in-aru-kashmir.jpg?s=1024x1024&w=is&k=20&c=knUq_5Xarl4n8dN8qWAhT1ItS6oAehqj9SlnLuKozvE="

const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(info.city)}`;
return (
        <div className="infoBox">
           
            <div className='card'>
            <Card sx={{ maxWidth: 500 }}>
      <CardMedia className="photo"
        component="img"
        alt={info.city}
        height="200"
        image ={info.humidity > 80 && info.temp > 5? Rain_URL : info.temp > 15 ? SUN_URL : info.temp < 0 ? Icy_URL :Cold_URL }
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color:"black" }}>
                    {info.city} </a>
              {info.humidity  > 80 && info.temp > 5 ? <ThunderstormIcon/> : info.temp > 15 ?  <WbSunnyIcon/>: info.temp < 0 ?  <AcUnitIcon/> : <AirlineSeatIndividualSuiteIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} className='info'>
         
      <div>Temp : <b> {info.temp}&deg;C</b> </div>
      <div>Feels like : {info.feelsLIke}&deg;C</div>
      <div> Humidity : {info.humidity}% </div>
      <div>Max-Temp : {info.maxTemp}&deg;C </div>
      <div>Min-Temp : {info.minTemp}&deg;C </div>
        <div>  Weather : {info.weather} </div>  
          
     </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}