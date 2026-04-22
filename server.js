const express = require('express')

const app = express()
const PORT = 4000

app.get("/", async(req,res)=>{
    res.send("Server is up")
})

app.get('/health', async(req, res)=>{
    res.status(200).send("server is healthy")
})

app.listen(PORT,()=>{
    console.log(`Server running: ${PORT}`)
})