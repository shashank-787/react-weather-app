const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}` 

export async function getWeatherDataForCity(city){
    
    const res = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await res.json()
}   

export async function getWeatherDataForLocation(lat, lon){
    console.log(baseUrl)
    const res = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`)
    return await res.json()
}  
