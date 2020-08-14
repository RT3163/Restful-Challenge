const express = require('express')
const studentRouter = express.Router()

const students = [
    {
        studentId: 1,
        name: 'Brandon',
        grades: ["A+", "A+", "A+"]
    },
    {
        studentId: 2,
        name: 'Shelby',
        grades: ["C", "C-", "C+"]
    },
    {
        studentId: 3,
        name: 'Ben',
        grades: ["B+", "A", "D"]
    }
]
  studentRouter.get('/', (req, res) => {
    let name =  req.query.search
    console.log(req.params)
  
    if(name)
    {
    const student = students.find(student => student.name === name)
    res.json(student)
    }else{
      res.json(students)
    }
  })
  
  studentRouter.get('/:studentId', (req, res) => {
    const studentId = parseInt(req.params.studentId)
    console.log(req.params)
    const student = students.find(student => student.studentId === studentId)

    res.json(student)
  })

module.exports = studentRouter