const apiKey = "7C6ETNGMQ3NT55NCDK9MGLH7Q";

// Fetch weather data from Visual Crossing
export async function getWeatherData(location, unit) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();
  console.log(data);
  return data;
}

// Process the fetched data
export function processWeatherData(data) {
  return {
    location: data.address,
    description: data.currentConditions.conditions,
    temp: data.currentConditions.temp,
    humidity: data.currentConditions.humidity,
    windSpeed: data.currentConditions.windspeed,
  };
}
