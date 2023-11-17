// import express from 'express';
// import open from 'open'
const express = require('express')
const open = require('open')
const app = express()
app.use(express.json())

app.post('/open', async (req,res) => {
    const {url} = req.body
    console.log(url)
    await open(url)
    res.send()
})

app.listen(3000,() => {
    console.log("O app ta na porta 3000")
})