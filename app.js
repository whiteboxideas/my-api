// Import express
const express = require('express')
const app = express()
const PORT = 3000

// Middleware to parse JSON bodies
app.use(express.json())

// Define a GET route
app.get('/api/hello', (req, res) => {
  console.log('app.js-11: req', req)
  res.status(200).json({ message: 'Hello from your API 2!' })
})
// POST route to receive data
app.post('/api/data', (req, res) => {
  console.log(req.body) // Log data received in the request body
  res.status(201).json({ message: 'Data received', data: req.body })
})

// PUT route to update data
app.put('/api/data/:id', (req, res) => {
  res
    .status(200)
    .json({ message: `Data ${req.params.id} updated`, newData: req.body })
})

// DELETE route to delete data
app.delete('/api/data/:id', (req, res) => {
  res.status(200).json({ message: `Data ${req.params.id} deleted` })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
