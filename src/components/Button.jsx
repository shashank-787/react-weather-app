import { WeatherContext } from "../context/Weather";
import { useContext } from "react";
export default function Button({onClick, name}){
    const {searchCity, data, setSearchCity, fetchData} = useContext(WeatherContext)
    return (
        <button className="bg-emerald-400 text-base border-1 py-1 px-3 rounded-2xl cursor-pointer" onClick={onClick}>{name}</button>
    )
}