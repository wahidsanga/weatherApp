import React from "react";
import { useWeather } from "../context/WeatherContext";

const Input = () => {
    const weather = useWeather();
    // console.log("data from", weather);
    return (
        <input className="input-field"
        placeholder="Search Here"
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)} />
    )
};

export default Input;