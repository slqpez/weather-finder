import Finder from "./finder.js"
import UI from "./UI.js" 
import isEmpty from "./validations.js"



const cityInput = document.querySelector('#city')
const countryInput = document.querySelector('#country')

const btnSearch = document.querySelector('#btn-search')

btnSearch.addEventListener('click', (e)=>{
    e.preventDefault()

    const city = cityInput.value
    const country  = countryInput.value
    const finder = new Finder(city, country)
    const cityValue =finder.getCity()
    const countryValue = finder.getCountry()
    console.log(countryValue)
    

    if(isEmpty(cityValue) || isEmpty(countryValue)){
        console.log('Todos los campos son obligatorios.')
    }else{
        console.log("Buscando...")
    }

})