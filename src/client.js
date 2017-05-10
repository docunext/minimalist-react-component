import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import createFetch from './createFetch';
import history from './history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import testApp from './store/reducers';

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



let store = createStore(testApp,
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

async function onLocationChange(location, action) {

	const route = await router.resolve({
	  path: location.pathname,
	  fetch: context.fetch,
	});
	
    currentLocation = location;

	ReactDOM.render(
      <Provider store={store}>
          <App context={context}>{route.component}</App>
      </Provider>,
	  MOUNT_NODE
	);

}

history.listen(onLocationChange);
onLocationChange(currentLocation);
