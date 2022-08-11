const express = require('express')
const app = express()
// const axios = require('axios')

const heroes = require('../heroes')
const { verifyHeroe } = require('../middlewares/heroes')
const { verifyAvailability } = require('../middlewares/heroes')

app.get('/', (req, res, next) => {
  res.json(heroes)
  res.send('Les voici tous...')
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

app.put('/:slug',verifyAvailability, validateHero, (req, res, next) => {
  const { slug } = req.params
  const heroe = heroes.find(heroe => heroe.slug === slug)
  const heroeIndex = heroes.findIndex(heroe => heroe.slug === slug)

  heroe.slug = req.body.slug,
  heroe.name = req.body.name,
  heroe.power = req.body.power,
  heroe.color = req.body.color,
  heroe.isAlive = req.body.isAlive,
  heroe.age = req.body.age,
  heroe.image = req.body.image
  res.status(200).json(heroe)

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

app.put('/:slug/powers/:power', verifyAvailability, (req, res, next) => {
  res.push(req.hero.power)
  res.send('Et un nouveau pouvoir!')
  next()
})

app.delete('/:slug/powers/:power', verifyHeroe, (req, res, next) => {
  heroes.power.splice(req.heroeIndex,1)
  res.json(`Le pouvoir ${power} de ${slug} effacé!`)
  next()
})




module.exports = app