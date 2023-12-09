const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

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
