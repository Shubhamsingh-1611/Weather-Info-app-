import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    let HOT ="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=1024x1024&w=is&k=20&c=5hofX5ZVagxBLLoWcKePmk7EJqWg39J_egG5JsVIj_E="
    let COLD ="https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=1024x1024&w=is&k=20&c=FzBhkGLI-zWZ36jW-uKKSeJJcFSNLFJ0b_kWmGlscuk="
    let RAIN ="https://media.istockphoto.com/id/1254153999/photo/shallow-depth-of-field.webp?s=1024x1024&w=is&k=20&c=6OGR5e_Hlc-T_9Pn-HJ-dNNMvAKd7aXmjvLTIfacxLE="
    return(
        <div>
          <h1>Weather Info-{info.city}</h1>  
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN:(info.temperature<20?COLD:HOT)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;{info.humidity>80?<ThunderstormIcon/>:(info.temperature<20?<AcUnitIcon/>:<WbSunnyIcon/>)}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>Temperature : {info.temperature}&deg;C</div>
        <div>Min Temperature : {info.temperatureMin}&deg;C</div>
        <div>Max Temperature : {info.temperatureMax}&deg;C</div>
        <div>Humidity : {info.humidity}</div>
        <div>Feels Like : {info.feelsLikes}</div>
        <div>Weather : {info.weather}</div>

        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}