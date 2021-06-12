import Finder from "./finder.js"
import UI from "./UI.js" 
import API from "./API.js"
import isEmpty from "./validations.js"
import {kelvinToC} from "./helpers.js"



const cityInput = document.querySelector('#city')
const countryInput = document.querySelector('#country')
const form  = document.querySelector('.form')
const results  = document.querySelector('.results')

const btnSearch = document.querySelector('#btn-search')

btnSearch.addEventListener('click', async (e)=>{
    e.preventDefault()

    const city = cityInput.value
    const country  = countryInput.value
    const finder = new Finder(city, country)
    const cityValue =finder.getCity()
    const countryValue = finder.getCountry()

    

    if(isEmpty(cityValue) || isEmpty(countryValue)){
        UI.showMessage("No ingresaste un valor válido.", form)
    }else{
        const APIf = new API(cityValue, countryValue)
        const data = await APIf.fetchWeather()
        console.log(data)
        const {name, main: {temp, temp_max, temp_min}} = data

        const tempC = kelvinToC(temp)
        const tempMaxC = kelvinToC(temp_max)
        const tempMinC = kelvinToC(temp_min)
        results.innerHTML =`
        La temperatura en ${name} es: <br/>
        ${tempC} 9&#176; <br/>
        La mínima es de : ${tempMinC} 9&#176; <br/>
        La máxima es de : ${tempMaxC} 9&#176; <br/>
        `


    }

})

