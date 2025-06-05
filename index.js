const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

let projects = [];

app.use(cors());
app.use(express.json());

app.get('/projects', (req, res) => {
  res.json(projects);
});

app.post('/projects', (req, res) => {
  const newProject = { ...req.body, project_id: Date.now() };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
