const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const weatherIcon = document.querySelector('#weather-icon')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  messageThree.textContent = ''
  fetch(`/weather?address=${encodeURIComponent(location)}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        const {
          description,
          feelsLike,
          humidity,
          icon,
          location,
          placeName,
          precip,
          temperature
        } = data
        weatherIcon.src = `/img/icons/${icon}.png`
        weatherIcon.hidden = false
        messageOne.textContent = location
        messageTwo.textContent = `${description} and ${temperature} degrees, feels like ${feelsLike}.`
        messageThree.textContent = `The UV Index is ${uvIndex} and humidity is at ${humidity} %`
        console.log(`The geolocation API reported the address as ${placeName}.`)
      }
    })
  })
})
