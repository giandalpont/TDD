const express = require('express')
const app = express()

app.get('/', ( req, res ) => {
    res.status(200).send()
})

app.listen({ port: 3001 }, () => {
    console.log(`🚀 Server ready at http://localhost:3001`)
})