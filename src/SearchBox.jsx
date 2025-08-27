import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () =>{
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);

            let reult = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            console.log(reult);
            return reult;
        } catch (err){
            throw err;
        }
        
    };

    let hanndlChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            // console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);

            setCity("");
        } catch (err) {
            setError(true);
        }
        
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={city}
                    onChange={hanndlChange}
                    required/>
                <br /><br />
                <Button variant="contained" type='submit' endIcon={<SendIcon />}>Search</Button>
                {error && <p style={{color : "red"}}>Sorry! No such place in our API. Please Try to search for another city.</p>}
            </form>
        </div>
    )
}