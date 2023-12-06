import express from 'express'
import {} from 'dotenv/config'

// LOAD STATIC FILES
// import path from "path"
// import { fileURLToPath } from "url"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const router = express.Router()
const app = express()

// Excluding this line results in a TypeError when trying to load in
// static resources from the 'public' folder
app.use(express.static('public'))
//app.use(express.static(__dirname + '/public'));
//app.use(express.static('public', 'mime': 'text/javascript'))

router.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.use(router)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
