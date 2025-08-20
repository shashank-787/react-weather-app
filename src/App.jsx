import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'
import { useContext, useEffect } from "react";
import { useWeather, WeatherContext } from './context/Weather';
import { InfoCard } from './components/InfoCard'
import './App.css'

function App() {
    const weather = useWeather();
    console.log(weather)

    useEffect(() => {
        weather.fetchCurrentUserLocation()
    }, [])

    const metrics = [
        { title: "Wind", value: weather.data?.current?.wind_kph, unit: "kph" },
        { title: "Humidity", value: weather.data?.current?.humidity, unit: "%" },
        { title: "Cloud Cover", value: weather.data?.current?.cloud, unit: "%" },
        { title: "Visibility", value: weather.data?.current?.vis_km, unit: "km" },
        { title: "UV Index", value: weather.data?.current?.uv },
        { title: "Air Quality", value: weather.data?.current?.air_quality?.["us-epa-index"]}
    ];

    return (
        <>
            <div className="min-h-screen flex flex-col bg-emerald-100">
                <nav className='h-16  items-center flex justify-around py-4'>
                    {/* <h1>Weather App</h1> */}
                    <div className='flex gap-3 items-center'>
                        <Input />
                        <Button onClick={weather.fetchData} name={'Search'} />
                        {/* <Button onClick={weather.fetchData} name={'Refresh'}></Button> */}
                    </div>
                    {/* <Button name={'Dark mode'} /> */}
                </nav>

                <div className="flex grow-1 flex-col sm:flex-row">
                    <div className="px-10 sm:w-80">
                        <Card />
                    </div>
                    <div className="grid grow-1 grid-cols-1 gap-3 sm:gap-10  p-10  sm:grid-cols-2 lg:grid-cols-3">
                        {metrics.map((m, i) => (
                            <InfoCard key={i} title={m.title} value={m.value} unit={m.unit} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
export default App
