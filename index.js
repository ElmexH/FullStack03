require('dotenv').config()
const express       = require('express')
const app           = express()
const bodyParser    = require("body-parser")
const morgan        = require("morgan")
const cors          = require("cors")
const Person        = require("./models/person")

app.use(bodyParser.json())

morgan.token('json', function (req, res) { 
    if (req.method == "POST") {
        return JSON.stringify(req.body)
    } else
        return null
})

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :json"))

app.use(cors())

app.use(express.static('build'))



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
    Person.find({}).then(persons => {
        res.json(persons.map(note => note.toJSON()))
    })
})

app.get("/api/persons/:id", (req, res) => {
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person.toJSON())
            } else {
                res.status(404).end()
            }
        })
        .catch(error => {
            res.status(400).send({error: "malformatted if"})
        })
})

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id != id)
    res.status(204).end()
})

app.post("/api/persons", (req, res) => {
    const body = req.body
    
    if (!body.name) {
        return res.status(400).json({ 
          error: 'name missing' 
        })
    }
    if (!body.number) {
        return res.status(400).json({ 
            error: 'number missing' 
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })
    person.save().then(newPerson => {
        res.json(newPerson.toJSON())
    })
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


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})