// server.js
const express = require('express'); // Import the Express library
const app = express(); // Create an Express application
const PORT = process.env.PORT || 4000; // Define the port number
const path = require('path');
app.use(express.json()); // Middleware to parse JSON bodies

// Define a basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'file' , 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const projects = []; // Temporary storage for projects

// GET all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// POST a new project
app.post('/api/projects', (req, res) => {
  const newProject = req.body;
  projects.push(newProject);
  res.status(201).json(newProject);
});

// PUT to update a project
app.put('/api/projects/:id', (req, res) => {
  const projectId = req.params.id;
  const projectIndex = projects.findIndex(p => p.id === projectId);
  
  if (projectIndex !== -1) {
    projects[projectIndex] = req.body;
    res.json(projects[projectIndex]);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
});

// DELETE a project
app.delete('/api/projects/:id', (req, res) => {
  const projectId = req.params.id;
  const projectIndex = projects.findIndex(p => p.id === projectId);
  
  if (projectIndex !== -1) {
    const deletedProject = projects.splice(projectIndex, 1);
    res.json(deletedProject);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
});

