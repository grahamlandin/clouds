const express = require('express')
const app = express()
const path = require('path')

const PORT = 8080

app.use(express.static('assets'))

app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname + '/assets/clouds/clouds.html'))
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
