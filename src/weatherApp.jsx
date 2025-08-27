import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city : "delhi",
        feelsLike: 30.22,
        humidity: 79,
        temp: 27.26,
        tempMax: 27.26,
        tempMin: 27.26,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}