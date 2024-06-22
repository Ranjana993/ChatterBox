import express from "express"
const app = express();

const PORT = process.env.PORT || 8000


app.get("/", (req, res) => {
  res.send("Hello World ")
})


app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))