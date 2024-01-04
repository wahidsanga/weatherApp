// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import { useWeather } from './context/WeatherContext';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  },[]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData } value="Search"/>
      <Card />
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
