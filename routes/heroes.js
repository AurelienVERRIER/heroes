const express = require('express')
const app = express()
// const axios = require('axios')

const heroes = require('../heroes')
const { verifyHeroe } = require('../middlewares/heroes')
const { verifyAvailability } = require('../middlewares/heroes')

app.get('/', (req, res, next) => {
  res.json(heroes)
  res.send('Ls voici tous...')
  next()
})

app.get('/:slug', verifyHeroe, (req, res, next) => {
  res.json(req.heroe)
  res.send('Et voilà!')
  next()
})

app.post('/:slug', verifyAvailability, (req, res, next) => {
  res.push(req.heroe)
  res.send('Et un super héros de plus, un!')
  next()
})

app.delete('/:slug', verifyHeroe, (req, res, next) => {
  heroes.splice(req.heroeIndex,1)
  res.json(`${slug} effacé!`)
  next()
})

app.get('/:slug/powers', verifyHeroe, (req, res, next) => {
  res.json(req.hero).power
  res.send('Voilà!')
  next()
})

app.post('/:slug/powers', verifyAvailability, (req, res, next) => {
  res.push(req.hero.power)
  res.send('Voici ses pouvoirs!')
  next()
})

app.put('/:slug/powers', verifyAvailability, (req, res, next) => {
  res.push(req.hero.power)
  res.send('Et un nouveau pouvoir!')
  next()
})

app.delete('/:slug/powers', verifyHeroe, (req, res, next) => {
  heroes.power.splice(req.heroeIndex,1)
  res.json(`${slug} effacé!`)
  next()
})




module.exports = app