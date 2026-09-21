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

app.get("/fetch", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await response.json()

    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des données" })
  }
})


app.get("/name/:name", (req, res) => {
    console.log(req.params.name)
    res.json({ message: 'ceci est la page de ' + req.params.name })
})


app.listen(3000, () => console.log("http://localhost:3000"))