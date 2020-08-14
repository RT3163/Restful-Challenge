const express = require('express')
const gradesRouter = express.Router()

const students = [
    { 
      studentId: 1,
      name: 'Brandon',
      grades: ["A+", "A+", "A+"]
    },
    { 
      studentId: 2,
      name: 'Shebly',
      grades: ["C", "C-", "C+"]
    },
    { 
      studentId: 3,
      name: 'Ben',
      grades: ["B+", "A", "D"]
    }
  ]

  gradesRouter.get('/:studentId', (req, res) => {
    const studentId = parseInt(req.params.studentId)
    console.log(req.params)
    const student = students.find(student => student.studentId === studentId)
    res.json(student.grades)
  })

  gradesRouter.post('/', (req, res) => {
    const studentId = parseInt(req.params.studentId)
    const grade = req.params.grade

    if(Number.isInteger(studentId) && grade.length == 1)
    {
        res.send('The grade has been recorded')
    }
  })

module.exports = gradesRouter