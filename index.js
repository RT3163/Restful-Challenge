const express = require('express')
const app = express()

const studentRouter = require('./routes/students')
const gradesRouter = require('./routes/grades')

const PORT = 8080

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Welcome to Ronalds Student-Grade Web App')
})

app.post('/register', (req, res) => {
  const studentId = parseInt(req.params.studentId)
  const username = req.params.username
  const email = req.params.email

  if(Number.isInteger(studentId) && username != '' && email != '')
  {
      res.send('The student has been registered.')
  }
})

app.use('/students', studentRouter)
app.use('/grades', gradesRouter)


app.listen(PORT)

module.exports = app