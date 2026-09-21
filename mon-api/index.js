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


app.listen(3000, () => console.log("http://localhost:3000"))