const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/Hello_world.html')
})

app.get('/form', (req, res)=>{
    res.sendFile(__dirname + '/form.html')
})

app.listen(3000)
console.log('server in port 3000')