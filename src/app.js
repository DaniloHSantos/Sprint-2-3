const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/mainRoutes')
 
// Servindo arquivos estáticos
app.use(express.static('./src/public'))
 
app.use('/', routes)
 
// Definindo a porta que a aplicação aparecerá caso rode em node
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})