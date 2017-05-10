import React from 'react';
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import SetName from '../../containers/setName';

const Header = () => (
    <div className={s.header}>
        <SetName />
        <span>Simple Component</span>
        <Link to="/">Home</Link>
    </div>
);

export const StyledHeader = withStyles(s)(Header);
