import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'
import { useContext, useEffect } from "react";
import { useWeather, WeatherContext } from './context/Weather';
import './App.css'

function App() {
    const weather = useWeather();
    console.log(weather)

    useEffect(() => {
        weather.fetchCurrentUserLocation()
    }, [])
    return (
        <>  
            <div className='flex items-center justify-center box-border'>
                <div className='w-120 flex flex-col items-center px-10 pt-6 pb-7 mt-20 rounded-lg bg-emerald-100 text-center'>
                    <h1 className='text-4xl mb-4'>Weather App</h1>
                    <div className='flex gap-3'>
                        <Input/>
                        <Button onClick={weather.fetchData} name={'Search'}/>    
                    </div>
                    <Card/>
                    <Button onClick={weather.fetchData} name={'Refresh'}></Button>
                </div>    
            </div>
            
            
        </>
    )   
}
export default App
