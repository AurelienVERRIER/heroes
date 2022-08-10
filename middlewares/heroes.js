const heroes = require('../users')


const verifyHeroe = (req, res, next) => {
  const { slug } = req.params
  const heroe = heroes.find(heroe => heroe.slug === slug)
  const heroeIndex = heroes.findIndex(heroe => heroe.slug === slug)

  if (!heroe) {
    res.status(404).json(`Super héros non répertorié`)
  } else {
    req.heroe = heroe
    req.userIndex = heroIndex
    next()
  }
}

module.exports = {
  verifyHeroe: verifyHeroe
}