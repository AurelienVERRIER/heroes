const heroes = require('../users')


const verifyHeroe = (req, res, next) => {
  const { slug } = req.params
  const heroe = heroes.find(heroe => heroe.slug === slug)
  const heroeIndex = heroes.findIndex(heroe => heroe.slug === slug)

  if (!heroe) {
    res.status(404).json(`Super héros non répertorié`)
  } else {
    req.heroe = heroe
    req.userIndex = heroeIndex
    next()
  }
}

const verifyAvailability = (req, res, next) => {
  const { slug } = req.params
  const heroe = heroes.find(heroe => heroe.slug === slug)
  const heroeIndex = heroes.findIndex(heroe => heroe.slug === slug)

  if (heroe) {
    res.status(403).json(`Super héros déjà répertorié!`)
  } else {
    req.heroe = heroe
    req.userIndex = heroeIndex
    next()
  }
}


const validateHero = (req, res, next) => {
  const { slug } = req.params
  const heroe = heroes.find(heroe => heroe.slug === slug)
  const heroeIndex = heroes.findIndex(heroe => heroe.slug === slug)

  if (heroe)
  & (hero.slug.typeOf === "string")
  & (hero.name.typeOf === "string")
  & (hero.power.typeOf === "string")
  & (hero.color.typeOf === "string")
  & (hero.isAlive.typeOf === "boolean")
  & (hero.age.typeOf === "rnumber")
  & (hero.image.typeOf === "string")
  {
    req.heroe = heroe
    req.userIndex = heroeIndex
    next()
  } else {
    res.status(400).json(`Les données entrées ne sont pas toutes compatibles`)
      next()
    }
}


module.exports = {
  verifyHeroe: verifyHeroe
}

module.exports = {
  verifyAvailability: verifyAvailability
}

module.exports = {
  validateHero: validateHero
}