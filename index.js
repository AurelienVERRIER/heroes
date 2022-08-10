const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const heroesRoutes = require('.routes/heroes')

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/superheroes', heroesRoutes)


app.listen(port, () => {
  console.log(`Le serveur tourne sur le port ${port}`)
})