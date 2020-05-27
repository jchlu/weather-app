const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  fetch(`/weather?address=${encodeURIComponent(location)}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        const { description, temperature, feelsLike, location, placeName } = data
        messageOne.textContent = location
        messageTwo.textContent = `${description} and ${temperature} degrees, feels like ${feelsLike}`
        console.log(`The geolocation API reported the address as ${placeName}.`)
      }
    })
  })
})
