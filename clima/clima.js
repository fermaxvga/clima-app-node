const axios = require('axios');


const getClima = async(lat, lng) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=4c05fb9ce65939e5e1baa20c7fc8030c&units=metric`);

    return response.data.main.temp
}


module.exports = {
    getClima
}