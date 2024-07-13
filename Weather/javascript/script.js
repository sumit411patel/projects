// alert("enter any city name in search box!");
              
const button = document.getElementById('search');
const input = document.getElementById('city-input');
const citytemp = document.getElementById('temp');
const citytime = document.getElementById('city-time');
const cityname = document.getElementById('city-name');
const regionname = document.getElementById('region');
const countryname = document.getElementById('country');
const countryandregion = document.getElementById('countryandregion');
const feelslike = document.getElementById('feelslike');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind_speed');
const index = document.getElementById('UV');
const winddir = document.getElementById('wind_dir');
const weather_img = document.querySelector('.weather_img');
const weather_con = document.getElementById('weather_con');
const internet = document.querySelector('.mid1');
const location_not_found = document.querySelector('.mid2');

async function getData(cityname){
      try {
        const Promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=f3020f6467aa41e5a5c110122240107&q=${cityname}&aqi=no`);
        if(Promise.status == 400 ){
            location_not_found.style.display = 'flex';
        }
        else{
        internet.style.display = 'none';    
        location_not_found.style.display = 'none';    
        return await Promise.json();} 
      } catch (error) {
        internet.style.display = 'flex';
      }
}
button.addEventListener("click", async () =>{
    const value = input.value;
    const result = await getData(value);
    citytemp.innerText =`${Math.round(result.current.temp_c)}`;
    citytime.innerText = result.location.localtime;
    cityname.innerText = result.location.name;
    regionname.innerText = result.location.region;
    cityname.innerText = result.location.name;
    countryname.innerText = result.location.country;
    countryandregion.innerText = `${result.location.name}-${result.location.country}`
    feelslike.innerText = result.current.feelslike_c;
    humidity.innerText = result.current.humidity;
    windspeed.innerText = result.current.wind_kph;
    winddir.innerText = result.current.wind_dir;
    index.innerText = result.current.uv;
    weather_img.src = result.current.condition.icon;
    weather_con.innerText = result.current.condition.text;
});

