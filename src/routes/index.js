export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./About').default,
    require('./Home').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    // Thanks to www.reactstarterkit.com
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },
};
