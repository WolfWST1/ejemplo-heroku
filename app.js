const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.sendFile('Hello_world.html')
})

app.get('/form', (req, res)=>{
    res.sendFile('form.html')
})

app.listen(3000)
console.log('server in port 3000')