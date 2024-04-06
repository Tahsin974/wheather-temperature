const API_KEY = `bd11276f40d6eed74143e3c65ffdb42a`;
const searchTemp = ()=> {
    const searchCity = document.getElementById('search-field');
    const cityName = searchCity.value;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    
    fetch(URL)
    .then(res => res.json())
    .then(data => displayTemp(data));
    searchCity.value = '';
}

const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temperature =>{
    setInnerText('city',temperature.name);
    setInnerText('temp',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);
    const imgURL = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('wheather-icon');
    weatherIcon.setAttribute('src',imgURL)
}