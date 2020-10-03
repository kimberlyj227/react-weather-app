import axios from "axios";
const weatherKey = process.env.REACT_APP_WEATHERBIT_KEY;
// AIzaSyCDzhPIavvhI5YQ9nfkJi7ieH5JR9RLglc   google key

export default {
  getWeather: location => {
   return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&days=7&units=I&key=${weatherKey}`)
  }
}
