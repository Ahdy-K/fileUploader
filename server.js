const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const server = express()
server.use(cors())
server.use(fileUpload())
// File Upload
server.post('/upload',(req, res)=>{
    if(req.files.file=== null){
        res.status(400).json({msg:'please add a file first'})
    }

    const file = req.files.file

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err =>{
        if(err){
            console.log(err)
            return res.status(500).send(err)
        }
        res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
    })
})


server.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
})