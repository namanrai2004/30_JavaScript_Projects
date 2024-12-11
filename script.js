const api = async (city) => {
    try {
        let apiKey = "1b5c83d2c0bf73e09b0b19ff93bafa02"
        let apiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        const response = await fetch(`${apiLink}${city}&appid=${apiKey}`)
        const data = await response.json()
        console.log(data);
         
        const temp = Math.floor(data.main.temp)
        const wind = Math.floor(data.wind.speed)
        const name = data.name
        const feels = data.main.feels_like
        const cloud = data.clouds
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString()
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        const temperature = document.querySelector('.temperature')
        temperature.innerHTML = `${temp}°C`

        const speed  = document.querySelector('.wind-speed')
        speed.innerHTML = `Wind :${wind} km/h`

        const cities = document.querySelector('.cities')
        cities.innerText = `${name}`

        const feelsLike = document.querySelector('.feels-like');
        feelsLike.innerHTML = `Feels Like: ${feels}°C`;

        const cloudCover = document.querySelector('.clouds');
        cloudCover.innerHTML = `Cloud Cover: ${cloud}%`;

        const sunriseElement = document.querySelector('.sunrise');
        sunriseElement.innerHTML = `Sunrise: ${sunrise}`;

        const sunsetElement = document.querySelector('.sunset');
        sunsetElement.innerHTML = `Sunset: ${sunset}`;
        
    } catch (error) {
        console.log("ERROR",error);
        
    }
   
    
}
// api("mumbai")

 const input = document.querySelector('.inpt');
const btn = document.querySelector('.button');

btn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        api(input.value);  // Call the API function with input value if not empty
    } else {
        console.log("Input is empty!");  // Optional: Handle empty input scenario
    }
});



    




