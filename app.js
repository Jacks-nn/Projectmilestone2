// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Define a route for handling form submissions
app.post('/submit-form', (req, res) => {
    console.log('Form submission route triggered');
    // Extract form data from the request body
    const { name, email, message } = req.body;

    // Validate form data
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required');
    }

    // Process the form data (for example, send an email, save to a database, etc.)
    // Here, we're just sending a simple response
    res.send(`Form submitted successfully:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
