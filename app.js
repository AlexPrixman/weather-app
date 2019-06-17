const places = require('./places/places');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    location: {
        alias: 'd',
        desc: 'Location of the city that will display the weather',
        demand: true
    }
}).argv;

// places.getLugarLatLng(argv.location).then(console.log)

// weather.getWeather(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(location) => {

    try {
        const coords = await places.getLugarLatLng(location);
        const temp = await weather.getWeather(coords.lat, coords.lon);
        return `${ coords.location }'s current weather is ${ temp }.`;
    } catch (e) {
        return `The weather of ${ location } could not be determined.`;
    }

}


getInfo(argv.location)
    .then(console.log)
    .catch(console.log);