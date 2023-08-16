const express = require('express')

const app = express()

app.get('/', (request, response) => {
     response.send('It worked!')
})

app.listen(4000, () => {
    console.log(`Server is Listening on 4000`)
})