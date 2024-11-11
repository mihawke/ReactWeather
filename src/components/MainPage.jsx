import React, { useEffect, useState } from 'react';
import { BsGeoAlt } from 'react-icons/bs';
import { FaWind } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import Header from './Header';


const MainPage = ({ handleLocation, data }) => {
  const [temp, setTemp] = useState('')
  const [weather, setWeather] = useState('')
  const [temperature, setTemperature] = useState([temp])

  const dayNumber = new Date().getDay();

  const currentDay = () => {
    switch (dayNumber) {
      case 0:
        return "Sunday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (data.main) {
      const x = (data.main?.temp || '') - 273.15
      setTemp(data.main?.temp || '')
      setWeather(data.weather[0]?.main || '')
      setTemperature([x.toFixed(0)])
    }
  }, [data])

  const handleCelcius = (temp) => {
    const x = parseFloat(temp) - 273.15
  }
  const handleFahrenheit = (temp) => {
    const x = 1.8 * (parseFloat(temp) - 273) + 32
  }

  return (
    <>
      <div className="p-6 bg-gray-800 rounded-lg max-w-lg mx-auto">

        <div className="flex justify-between items-center">
          <Header handleLocation={handleLocation} />
        </div>

        <div className='flex flex-row my-2 justify-between items-center'>
          <div className='flex flex-row my-2 justify-between items-center'>
            <BsGeoAlt className="mr-2" size={24} />{data.name} , {data.sys?.country || ''}
          </div>
          <p>|</p>
          <p className="text-white text-lg font-medium">{currentDay()}</p>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <div className="flex items-center justify-center">
            <p className="text-6xl font-bold text-white">
              {temperature[0]}
              °C
            </p>
          </div>
          <div className="flex flex-col w-fit">
            <div className="flex items-center gap-2">
              <FaWind size={18} className="text-white" />
              <p className="text-white text-sm">{data.wind?.speed || '0'} m/s</p>
            </div>
            <div className="flex items-center gap-2">
              <FaDroplet size={18} className="text-white" />
              <p className="text-white text-sm">{data.main?.humidity || '0'}%</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {data.main && <img src={`https://openweathermap.org/img/w/${data.weather[0]?.icon}.png`} style={{ height: '70px', width: 'auto' }}></img>}
            {data.weather && (
              <p className="text-xs text-white font-medium">{data.weather[0]?.main}</p>
            )}
          </div>
        </div>
      </div>
    </>

  );
}

export default MainPage;
