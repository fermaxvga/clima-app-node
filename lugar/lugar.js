const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,

        headers: { 'x-rapidapi-key': '513837016dmsh9dc144f5d4530abp146f74jsn6350aa5c7d3f' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = response.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}