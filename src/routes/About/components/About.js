import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';

export const About = () => (
  <div className={s.about}>
    <h3>About</h3>
    <p>
        What about it?
    </p>
  </div>
);

export const StyledAbout = withStyles(s)(About);
