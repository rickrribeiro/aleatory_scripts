const express = require('express')

const app = express()

app.use(express.json())

app.get('*', (req, res) =>{
    //console.log(req)
    console.log("headers: ")
    console.log(req.headers)
    console.log("body: ")
    console.log(req.body)
    res.status(200).send()
})

app.post('*', (req, res) =>{
   // console.log(req)
    console.log("headers: ")
    console.log(req.headers)
    console.log("body: ")
    console.log(req.body)
    res.status(200).send()
})

app.put('*', (req, res) =>{
   // console.log(req)
    console.log("headers: ")
    console.log(req.headers)
    console.log("body: ")
    console.log(req.body)
    res.status(200).send()
})

app.listen(3371,() =>{
    console.log("O app ta na porta 3371")
})