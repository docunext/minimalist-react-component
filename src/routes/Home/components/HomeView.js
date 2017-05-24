import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomeView.css';

export const HomeView = () => (
  <div className={s.home}>
    <h3>Hello, world!</h3>
    <p>
      Lorem ipsem
    </p>
  </div>
);

export const StyledHomeView = withStyles(s)(HomeView);
