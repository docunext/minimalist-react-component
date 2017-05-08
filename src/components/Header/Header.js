import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';

export class Header extends React.Component {
    render() {
        return (
            <div className={s.header}>
                <span>Simple Component</span>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export const StyledHeader = withStyles(s)(Header);
