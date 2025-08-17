import { useContext } from "react";
import { WeatherContext } from "../context/Weather";
export default function Input(){
    const weather = useContext(WeatherContext);
    return (
        <input 
            className="border-1 rounded-md text-lg px-3"
            placeholder="Enter city here"
            value={weather.searchCity}
            onChange={(e) => { weather.setSearchCity(e.target.value)}} 
        />
    )
}