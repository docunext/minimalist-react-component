import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html';
import World from './routes/Home';
import path from 'path';
import router from './router';
import App from './components/App';
import createFetch from './createFetch';
import assets from './assets.json'; 

const serverPort = process.env.PORT || 3000;
const app = express();
let config;
if (process.env.API_CONFIG) {
	config = JSON.parse(process.env.API_CONFIG);
} else {
	config = {
		api: {
			serverUrl: '/'
		}
	}
}
			

app.use(express.static(path.join(__dirname, '../build/public')));

app.get('*', async (req, res, next) => {

    const css = new Set();

    const context = {
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
      fetch: createFetch({
        baseUrl: config.api.serverUrl,
        cookie: req.headers.cookie,
      })
    };

    const route = await router.resolve({
      path: req.path,
      query: req.query,
      fetch: context.fetch,
      insertCss: context.insertCss
    });

    const data = { ...route };
    data.children = ReactDOM.renderToString(<App context={context}>{route.component}</App>);
    data.styles = [
      { id: 'css', cssText: [...css].join('') },
    ];
    data.scripts = [
        '/assets/client.js'
    ];
    data.app = {
      apiUrl: config.api.clientUrl,
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
});


app.listen(serverPort, () => {
  console.info(`The server is running at http://localhost:${serverPort}/`);
});
