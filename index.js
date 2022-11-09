const express = require('express')
const app = express()
const port = 3000
let c = 0

app.get('/', (req, res) => {
  res.send(`Hello World! ${++c}`)
  console.log("c=" , c) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})