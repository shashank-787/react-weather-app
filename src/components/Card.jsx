import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import { useWeather, WeatherContext } from "../context/Weather";

export default function Card() {
    const weather = useWeather()
    const city = weather.data?.location?.name
    const region = weather.data?.location?.region
    const temp = weather.data?.current?.temp_c

    const condition = weather.data?.current?.condition?.text
    const icon = weather.data?.current?.condition?.icon
    return (
        <>
            <div className="flex flex-col items-center gap-2 my-5">
                <img className="h-[64px] w-[64px]" src={icon} alt="weather image" />
                <h2 className="text-4xl font-bold">{temp}°C</h2>   
                <h5 className="text-2xl">{city}, {region}</h5>       
            </div>
        </>
    );
}