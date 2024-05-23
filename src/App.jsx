import { useEffect, useState } from 'react'
import './App.css'
import Highlights from './components/Highlights'
import Temperature from './components/Temperature'

function App() {
  const [city, setCity] = useState("Kerala")
  const [weatherData, setWeatherData] = useState(null)
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=b52138930e784f41929125748242305&q=${city}&aqi=no`


  useEffect(() => {

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setWeatherData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [city])


  return (
    <h1 className="bg-blue-950 h-screen flex justify-center">

      <div className="mt-40 w-1/5 h-1/3">
        <Temperature
          setCity={setCity}
          stats={{
            temp: weatherData?.current?.temp_c,
            condition: weatherData?.current?.condition?.text,
            isDay: weatherData?.current?.is_day,
            location: weatherData?.location?.name,
            time: weatherData?.location?.localtime
          }}
        />
      </div>

      <div className='w-1/3 h-1/3 p-10 mt-40 grid grid-cols-2 gap-6'>
        <h2 className='text-slate-200 col-span-2'>Today's Highlights</h2>
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
      </div>
    </h1>
  )
}

export default App
