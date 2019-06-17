const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);
    console.log(encodeUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUlr }`,
        headers: { 'X-RapidAPI-Key': 'ab83e43796mshf5828f5271342f1p10d286jsncf5fa32ad852' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ location }`);
    }

    const data = resp.data.Results[0];

    const location = data.name;

    const lat = data.lat;

    const lon = data.lon;

    return {
        location,
        lat,
        lon
    }

}


module.exports = {
    getLugarLatLng
}