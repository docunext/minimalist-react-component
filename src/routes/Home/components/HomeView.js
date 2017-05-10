import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomeView.css';

const HomeView = () => (
  <div className={s.giant}>
    <h1>Hello, world!</h1>
    <p>
      <a href="/">Home</a>
    </p>
  </div>
);

export const StyledHomeView = withStyles(s)(HomeView);
