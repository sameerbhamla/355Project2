const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  const { ticketNumber, name, email, message } = req.body;

  db.run('INSERT INTO contacts (ticketNumber, name, email, message) VALUES (?, ?, ?, ?)', [ticketNumber,name, email, message], (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Error submitting the form');
    }

    console.log('Data inserted into the database:', { ticketNumber, name, email, message });

    res.send('Form submitted successfully!');
  });

  db.all('SELECT * FROM contacts', (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Data in the contacts table:', rows);
  });
});

app.use((req, res, next) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 Not Found</title>
            <style>
                body {
                    text-align: center;
                    padding: 50px;
                    font-family: Arial, sans-serif;
                }
                h1 {
                    font-size: 2em;
                }
                p {
                    color: #777;
                }
            </style>
        </head>
        <body>
            <h1>404 Not Found</h1>
            <p>The requested page could not be found. Please check the URL.</p>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
