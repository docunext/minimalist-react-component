import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html';
import World from './components/World';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../build/public')));

app.get('/ssr', (req, res, next) => {
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Hi"
      description="Hi"
      scripts={["/assets/client.js"]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<World />)}
	</Html>
  );
  res.send(`<!doctype html>${html}`);
});

const html = '<!doctype html><html class="no-js" lang="en"><head><meta charset="utf-8"/><title>Hi</title><meta name="description" content="Hi"/></head><body><div id="app"></div><script src="/assets/client.js"></script></body></html>';

app.get('/nossr', (req, res, next) => {
  res.send(html);
});

app.listen(3000, () => {
  console.info(`The server is running at http://localhost:3000/`);
});
