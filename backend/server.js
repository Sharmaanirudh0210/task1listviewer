const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Hardcoded list of candidates
const candidates = [
    { id: 1, name: 'Anirudh Sharma', skills: 'React, Node.js', experience: 5 },
    { id: 2, name: 'Aditya Dixit', skills: 'Python, Django', experience: 3 },
    { id: 3, name: 'Deepanshu Saraswat', skills: 'Java, Spring', experience: 4 },
    { id: 4, name: 'Dheeraj Singh', skills: 'HTML, CSS, JavaScript', experience: 2 },
    { id: 5, name: 'Chetan Chauhan', skills: 'C++, Embedded Systems', experience: 6 },
    { id: 6, name: 'Harsh singh', skills: 'Go, Docker', experience: 3 },
    { id: 7, name: 'Tarun Kumar', skills: 'Kotlin, Android', experience: 4 },
    { id: 8, name: 'Vikram Kumar', skills: 'Ruby, Rails', experience: 5 },
    { id: 9, name: 'Yash Chauhan', skills: 'SQL, Data Analysis', experience: 2 },
    { id: 10, name: 'Naman Sharama', skills: 'Machine Learning, TensorFlow', experience: 4 },
];

// API Endpoint
app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});
