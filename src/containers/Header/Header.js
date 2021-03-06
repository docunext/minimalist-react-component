import React from 'react';
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import SetName from '../../components/setName';

const Header = () => (
    <div className={s.header}>
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <SetName />
        </li>
        </ul>
    </div>
);

const mapStateToProps = (state, ownProps) => {
  let myName = state.testApp.myName || '';
  return {
      myName
  };
}
export const StyledHeader = connect(mapStateToProps)(withStyles(s)(Header));
