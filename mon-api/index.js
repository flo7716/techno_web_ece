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

app.listen(3000, () => console.log("http://localhost:3000"))