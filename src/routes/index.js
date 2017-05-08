import World from '../components/World'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const Child = (store) => ({
  path : 'off',
  component   : World
})

export const createRoutes = (store) => ({
  path        : '/ssr',
  component   : World,
  indexRoute  : World,
  childRoutes : [
    Child(store)
  ]
})



export default createRoutes;
