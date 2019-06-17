const axios = require('axios');

const getWeather = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c7992a4f41d18816f611b49288d1cf84&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}