const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
