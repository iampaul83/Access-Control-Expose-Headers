const path = require('path')
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/report', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  // CORS 要加這個
//   res.set('Access-Control-Expose-Headers', 'Content-Disposition')
  res.set('Content-Disposition', 'attachment; filename="filename.jpg"')
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



const app2 = express()
app2.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app2.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})