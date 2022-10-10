const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/Login', (req, res) => {
  res.send({email:"abcd@gmail.com",pass:"123"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







