import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';

const Sidebar = (props) => (
    <div className={s.sidebar}>
    </div>
);

export const StyledSidebar = withStyles(s)(Sidebar);
