const express = require('express')
const app = express()
let isDispensing = false
app.use(express.json())
app.get('/state', (req, res) => res.send({isDispensing}))
app.post('/state', (req, res) => res.send({ isDispensing: isDispensing = req.body.isDispensing}))
app.listen(8080, ()=>console.log('deployed'))
