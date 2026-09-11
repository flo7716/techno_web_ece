// index.js
import express from "express"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "ça marche" })
})

app.get("/test", (req, res) => {
  res.json({ message: "ça marche pour la route test" })
})

app.get("/test/:id", (req, res) => {
  console.log(req.params.id)
  res.json({ message: `ça marche pour la route test avec l'id ${req.params.id}` })
})


app.get("/name/:name", (req, res) => {
    console.log(req.params.name)
    res.json({ message: 'ceci est la page de ' + req.params.name })
})

app.get("/name/:name/:age", (req, res) => {
    console.log(req.params.name)
    console.log(req.params.age)
    res.json({ message: 'ceci est la page de ' + req.params.name + ' et il a ' + req.params.age + ' ans' })
})

app.get("/lien", (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    res.json({ message: "ça marche pour la route lien" })
})

app.get("/lien/:id", (req, res) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    res.json({ message: "ça marche pour la route lien et l'id est " + req.params.id })
})

app.listen(3000, () => console.log("http://localhost:3000"))