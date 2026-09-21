// index.js
import express from "express"

function cors(req,res,next){
  res.set('Access-Control-Allow-Origin','*')
  res.set('Access-Control-Allow-Methodes','*')
  res.set('Access-Control-Allow-Headers','Content-Type, x-api-key')

  next()
}

const app = express()
app.use(cors)
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "ça marche" })
})

app.get("/test/:id", async (req, res) => {
  try {
    const { id } = req.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!response.ok) {
      return res.status(response.status).json({ error: "Ressource introuvable" })
    }

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