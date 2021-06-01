export default class API{


    
    constructor(city, country){
        this.API_KEY = "0e355f2d2aa2508bd57740d82598bea4"
        this.city= city
        this.country = country
        this.URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},{${this.country}&appid=${this.API_KEY}`
    }

    fetchWeather(){
        fetch(this.URL)
        .then(response => response.json())
        .then(data => console.log(data));
    }

}