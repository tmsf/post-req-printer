const express = require('express')
const app = express()
const port = 3000

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))
app.post('/', (req, res) => {
  console.log(req.body)
  res.send('ok!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
