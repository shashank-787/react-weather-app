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
            <div class="h-screen flex flex-col">
                <nav className='h-16 bg-amber-100 items-center flex justify-around py-4'>
                    {/* <h1>Weather App</h1> */}
                    <div className='flex gap-3 items-center'>
                        <Input />
                        <Button onClick={weather.fetchData} name={'Search'} />
                        {/* <Button onClick={weather.fetchData} name={'Refresh'}></Button> */}
                    </div>
                    {/* <Button name={'Dark mode'} /> */}
                </nav>

                <div class="flex grow-1 flex-col sm:flex-row">
                    <div class="bg-emerald-100 px-10 sm:w-80">
                        <Card />
                    </div>
                    <div class="grid grow-1 grid-cols-1 gap-4 bg-gray-100 p-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="rounded-lg bg-white p-6 shadow">Box 1</div>
                        <div class="rounded-lg bg-white p-6 shadow">Box 2</div>
                        <div class="rounded-lg bg-white p-6 shadow">Box 3</div>
                        <div class="rounded-lg bg-white p-6 shadow">Box 4</div>
                        <div class="rounded-lg bg-white p-6 shadow">Box 4</div>
                        <div class="rounded-lg bg-white p-6 shadow">Box 5</div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default App
