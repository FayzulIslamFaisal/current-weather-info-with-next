export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.CURRENT_WEATHER_WITH_NEXT_API}&units=metric`
    );
    const data = await response.json();
    return data?.weather[0];
  } catch (error) {
    console.error(error.message);
  }
};

export const getTemperatureData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.CURRENT_WEATHER_WITH_NEXT_API}&units=metric`
    );
    const data = await response.json();
    return data?.main;
  } catch (error) {
    console.error(error.message);
  }
};

export const getWindData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.CURRENT_WEATHER_WITH_NEXT_API}&units=metric`
    );
    const data = await response.json();
    return data?.wind;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAqiData = async (lat, lon) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.CURRENT_WEATHER_WITH_NEXT_API}`
    );
    const data = await response.json();
    console.log(data);
    return data?.list[0];
  } catch (error) {
    console.error(error.message);
  }
};