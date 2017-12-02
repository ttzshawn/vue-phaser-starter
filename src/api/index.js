import axios from 'axios'

export const fetchWeather = code => axios.post('/weather', code)

export default fetchWeather
