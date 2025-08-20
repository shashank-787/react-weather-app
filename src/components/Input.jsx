import { useContext } from "react";
import { WeatherContext } from "../context/Weather";
export default function Input(){
    const weather = useContext(WeatherContext);
    return (
        <input 
            className="bg-emerald-400/50  rounded-2xl text-base focus:outline-none px-3 py-1"
            placeholder="Enter city here"
            value={weather.searchCity}
            onChange={(e) => { weather.setSearchCity(e.target.value)}} 
        />
    )
}