const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/login', (req,res) => {
    res.send({
        token: 'testtoken123',
        userData: []
    })
})

app.listen(8080, () => console.log('API is running on  http://localhost:8080/login'))