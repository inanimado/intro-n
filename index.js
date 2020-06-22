const express = require('express')
const app = express()

app.get('*', (request, response) => {
    response.send({ message: 'Chanchito triste' })
})

app.listen(3000, () => console.log('Nuestro servidor está escuchando en el puerto 300'))