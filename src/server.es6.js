import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';



const app = express();

app.use((req, res, next) => {
  const html = ReactDOM.renderToStaticMarkup(
    <html>
        <body>
            <p>hi</p>
        </body>
    </html>
  );
  res.send(`<!doctype html>${html}`);
});

app.listen(3000, () => {
  console.info(`The server is running at http://localhost:3000/`);
});
