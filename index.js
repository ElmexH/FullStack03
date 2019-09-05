const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short', hour12: false };

let persons = [
    {
      name: "Dan Abramov",
      number: "12-43-234345",
      id: 3
    },
    {
      name: "Mary Poppendieck",
      number: "39-23-6423122",
      id: 4
    }
  ]

const idGen = () => {
    return Math.floor(Math.random()*1000000)

}

app.get("/api/persons", (req, res) => {
    res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id != id)
    res.status(204).end()
})

app.post("/api/persons", (req, res) => {
    const person = req.body
    
    if (!person.name) {
        return res.status(400).json({ 
          error: 'name missing' 
        })
    }
    if (!person.number) {
    return res.status(400).json({ 
        error: 'number missing' 
    })
    }
    if (persons.some(oldPerson => oldPerson.name === person.name)) {
        return res.status(400).json({
            error: 'person already in list'
        })
    }

    const newPerson = {
        name: person.name,
        number: person.number,
        id: idGen()
    }
    persons = persons.concat(newPerson)

    res.json(newPerson)
})

app.get("/info", (req, res) => {
    const html = `
        <div>
            <div>
                Phonebook has info for ${persons.length} people
            </div>
            <div>
                ${new Date().toLocaleTimeString('en-us', options)}
            </div>    
        </div>    
        
    `
    res.send(html)
})


const port = 3001

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})