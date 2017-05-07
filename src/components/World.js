import React from 'react';

class World extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>
          <a href="/ssr">SSR</a>
        </p>
        <p>
          <a href="/nossr">NO SSR</a>
        </p>
      </div>
    );
  };
}

export default World;
