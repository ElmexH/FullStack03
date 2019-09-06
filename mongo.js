const mongoose = require("mongoose")

if ( process.argv.length<3 ) {
    console.log('password required as argument')
    process.exit(1)
  }

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = 
    `mongodb+srv://FullStack:${password}@fullstackdb-1jqom.mongodb.net/phonenumbers?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true})

const personSchema = new mongoose.Schema({
    name:String,
    number:String
})

const Person = mongoose.model("Person", personSchema)

if (process.argv.length > 4) {    
    const person = new Person({
        name:name,
        number:number
    })

    person.save().then(res=>{
        console.log(`Added ${name} and the number ${number} to the phonebook`)
        mongoose.connection.close()
    })
} else {
    Person.find({}).then(res=>{
        console.log("Phonebook:")
        res.forEach(person => {
            console.log(`${person.name.padEnd(20)} ${person.number}`)
        })
        mongoose.connection.close()
    })

}

