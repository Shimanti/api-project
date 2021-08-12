const express = require("express")
const cors = require("cors")
const cooking = require("./IndianCooking2")

const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/recipes', (req, res) => {
  res.json(cooking)
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})
