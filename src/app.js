const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 3000

const { geocode } = require('./utils/geocode')
const { weather } = require('./utils/weather')
const { pickNineRandomImages } = require('./utils/weather-codes')
// Paths for express config
const staticPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Configure Handlebars as engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set static serve root
app.use(express.static(staticPath))

app.get('', (req, res) => {
  res.status(200).render('index', {
    title: 'Weather App',
    name
  })
})

const name = 'jchlu'

app.get('/about', (req, res) => {
  const images = pickNineRandomImages()
  res.status(200).render('about', {
    title: 'About Me',
    name,
    images
  })
})

app.get('/help', (req, res) => {
  res.status(200).render('help', {
    title: 'Help Page',
    msgs: [
      { p: 'All these worlds are yours except Europa' },
      { p: 'Attempt no landing there' },
      { p: 'Use then together' },
      { p: 'Use them in peace' }
    ],
    name
  })
})

app.get('/help/*', (req, res) => {
  res.status(404).render('404', {
    title: 'Help page not found.',
    errorMessage: 'Sorry, there\'s no Help article found here.',
    name
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.status(400).json({
      error: 'You need to provide a location'
    })
  }
  geocode(req.query.address, (error, { longitude, latitude, placeName } = {}) => {
    if (error) { return res.json({ error }) }
    weather(latitude, longitude, placeName, (error, { description, feelsLike, humidity, icon, location, placeName, uvIndex, temperature } = {}) => {
      if (error) { return res.json({ error }) }
      res.status(200).json({ description, feelsLike, humidity, icon, location, placeName, uvIndex, temperature })
    })
  })
})

app.get('*', (req, res) => {
  res.status(404).render('404', {
    title: 'Ooops! Page not found.',
    errorMessage: 'Sorry, there\'s no page here.',
    name
  })
})

app.listen(port, _ => {
  console.log(`Server up at http://localhost:${port}`)
})
