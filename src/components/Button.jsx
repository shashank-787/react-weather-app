import { WeatherContext } from "../context/Weather";
import { useContext } from "react";
export default function Button({onClick, name}){
    const {searchCity, data, setSearchCity, fetchData} = useContext(WeatherContext)
    return (
        <button className="text-md bg-emerald-400 py-3 px-5 rounded-md cursor-pointer" onClick={onClick}>{name}</button>
    )
}