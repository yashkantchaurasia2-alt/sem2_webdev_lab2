// const apiKey = "0133cc5316757ac730cc46ae342334e4";   // Replace with your API key
// const historyDiv = document.getElementById("history");
// const logBox = document.getElementById("log");

// let searchHistory = [];

// function log(message) {
//   logBox.textContent += message + "\n";
// }

// async function getWeather(cityFromHistory = null) {

//   logBox.textContent = "";   // Clear console

//   console.log("Sync Start");
//   log("1️⃣ Sync Start");

//   const city = cityFromHistory || document.getElementById("cityInput").value;

//   if (!city) return;

  
  

//   try {

//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     );

    

//     const data = await response.json();

//     log("5️⃣ [ASYNC] Data received");

//     displayWeather(data);
//     addToHistory(city);

//   } catch (error) {
//     alert("City not found!");
//   }
// }

// function displayWeather(data) {
//   document.getElementById("city").textContent =
//     `${data.name}, ${data.sys.country}`;
//   document.getElementById("temp").textContent =
//     `${data.main.temp} °C`;
//   document.getElementById("weather").textContent =
//     data.weather[0].description;
//   document.getElementById("humidity").textContent =
//     `${data.main.humidity}%`;
//   document.getElementById("wind").textContent =
//     `${data.wind.speed} m/s`;
// }

// function addToHistory(city) {
//   if (!searchHistory.includes(city)) {
//     searchHistory.push(city);

//     const btn = document.createElement("button");
//     btn.textContent = city;
//     btn.onclick = () => getWeather(city);

//     historyDiv.appendChild(btn);
//   }
// }




const API_KEY='0133cc5316757ac730cc46ae342334e4';

const city=document.querySelector('#city');
const search=document.querySelector('#search');

let visitedcities 

search.addEventListener('click', async (e)=> {
    e.preventDefault();
    const cityName=city.value;
    if(data){
      try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
        const weatherData=await response.json()
        console.log(weatherData)
      if(weatherData.cod===200){

      }  
    console.log("City:" , weatherData.name)
    console.log("Temperature:" ,  (weatherData.main.temp - 273.15).toFixed(2) + "°C")
    console.log("Weather:" , weatherData.weather[0].main)
    console.log("Humidity:" , weatherData.main.humidity )
    console.log("Wind Speed:" , weatherData.wind.speed ,"m/s")

    container.innerHTML=`<p>City: ${weatherData.name}</p>
    <p>Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
    <p>Weather: ${weatherData.weather[0].main}</p>
    <p>Humidity: ${weatherData.main.humidity}%</p>
    <p>Wind Speed: ${weatherData.wind.speed} m/s</p>`
    
})
}
    }
    