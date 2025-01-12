const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send("Hello world!")
})

app.get('/login', (req, res) => {
  res.send("Login route")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})