import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'docs')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the 'views' folder as the directory for the view files
app.set('views', path.join(__dirname, 'views'));

// Define a route to serve the terms and conditions HTML page
app.get('/terms', (req, res) => {
  res.render('terms');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
