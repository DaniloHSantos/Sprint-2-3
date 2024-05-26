const express = require('express')
const router = express.Router()
const path = require('path') // Garantir que o caminho seja resolvido corretamente
 
router.get('/', (req, res) => { // Enviando o HTML por Node GET
    res.sendFile(path.join(__dirname, './../view/index.html'))
})
 
module.exports = router