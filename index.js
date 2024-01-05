const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('My backend!')
})

app.listen(3000, () => {
    console.log('Executing backend...')
})