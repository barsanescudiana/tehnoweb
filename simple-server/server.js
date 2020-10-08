const express = require('express')

const app = express()

app.get('/ping', (req, resp) => {
    resp.send('pong')
})

app.listen(8080) //port binding

