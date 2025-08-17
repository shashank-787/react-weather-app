import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";
export const WeatherContext = createContext(null)

export function useWeather(){
    return useContext(WeatherContext)
}
export const WeatherProvider = ({children}) => {
    const [data, setData] = useState(null)  //data that will be fetched from api 
    const [searchCity, setSearchCity] = useState('')
    
    async function fetchData() {
        const response = await getWeatherDataForCity(searchCity) 
        setData(response)
    }

    function fetchCurrentUserLocation(){
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude)
            .then((data) => {setData(data)})
        })
    }

    return (
        <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocation }}>
            {children}
        </WeatherContext.Provider>
    )
}