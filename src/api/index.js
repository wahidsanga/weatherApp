const baseURL = "https://api.weatherapi.com/v1/current.json?key=340025bddeeb4722ba6105301240401";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataByLocation = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};