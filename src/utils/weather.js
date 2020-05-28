const request = require('postman-request')
const { codes } = require('./weather-codes')

const {
  WEATHERSTACK_API_ENDPOINT,
  WEATHERSTACK_ACCESS_KEY
} = process.env

const weatherOptions = (latitude, longitude) => ({
  uri: WEATHERSTACK_API_ENDPOINT,
  qs: {
    access_key: WEATHERSTACK_ACCESS_KEY,
    query: `${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`
  },
  json: true
})

const displayIcon = (weatherCode, isDay) => {
  const code = codes.find(code => {
    return code.WeatherCode === weatherCode
  })
  return isDay === 'yes' ? code.DayIcon : code.NightIcon
}

const weather = (latitude, longitude, placeName, callback) => {
  request(weatherOptions(latitude, longitude), (error, response, body) => {
    if (error) {
      callback(error, undefined)
    } else if (!body.current.weather_descriptions) {
      const msg = 'Looks like there were no results returned for that query'
      callback(msg, undefined)
    } else {
      // find icon name
      const icon = displayIcon(body.current.weather_code, body.current.is_day)
      var location = `${body.location.name}, `
      if (body.location.region) {
        location += `${body.location.region}, `
      }
      if (body.location.country) {
        location += body.location.country
      }
      // `${body.location.name}, ${body.location.region}, ${body.location.country}`
      callback(undefined, {
        description: body.current.weather_descriptions[0],
        feelsLike: body.current.feelslike,
        humidity: body.current.humidity,
        icon,
        location,
        placeName,
        uvIndex: body.current.uv_index,
        temperature: body.current.temperature
      })
    }
  })
}

module.exports = {
  weather
}
