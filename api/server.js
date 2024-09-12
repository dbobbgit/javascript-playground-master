const express = require('express')
const axios = require('axios')
const cors = require('cors')
// require('dotenv/config') // Automatically loads environment variables from the .env file
const dotenv = require('dotenv') // Load environment variables from a .env file
dotenv.config() // Load environment variables from a .env file

console.log('Loading environment variables...') // Adding this to confirm dotenv is being called

const app = express()
const port = 3000

app.use(cors()) // Enable CORS for cross-origin requests
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({ extended: true }))
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello, World!' })

// Define a route to fetch SW data from SWAPI using Axios
app.get('/api/starwars', async (req, res) => {
  try {
    // Use the API_BASE_URL from the .env file to fetch data from SWAPI
    console.log('API_BASE_URL:', process.env.API_BASE_URL) // Debugging
    const response = await axios.get(`${process.env.API_BASE_URL}/people/`)
    res.json(response.data) // Send the response data back to the frontend as JSON
  } catch (error) {
    console.error('Error fetching data from SWAPI:', error)
    res.status(500).json({ message: 'Error fetching data from SWAPI' })
  }
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})
