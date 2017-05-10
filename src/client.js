import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import createFetch from './createFetch';
import history from './history';

const initialState = window.__INITIAL_STATE__;
const MOUNT_NODE = document.getElementById('app');
const context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss());
    return () => { removeCss.forEach(f => f()); };
  },
  // Universal HTTP client
  fetch: createFetch({
    baseUrl: window.App.apiUrl,
  }),
};


let currentLocation = history.location;
let router = require('./router').default;

async function onLocationChange(location, action) {

	const route = await router.resolve({
	  path: location.pathname,
	  fetch: context.fetch,
	});
	
    currentLocation = location;

	ReactDOM.render(
	  <App context={context}>{route.component}</App>,
	  MOUNT_NODE
	);

}

history.listen(onLocationChange);
onLocationChange(currentLocation);
