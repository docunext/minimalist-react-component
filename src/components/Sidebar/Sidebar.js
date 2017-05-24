import React from 'react';
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';
import Link from '../Link';

const SearchLink = (text) => {
    if (text) {
        return (<Link to={text}>{text}</Link>);
    }
};

const Sidebar = (props) => (
    <div className={s.sidebar}>
        <ul>
            <li>
                {SearchLink(props.myName)}
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
export const StyledSidebar = connect(mapStateToProps)(withStyles(s)(Sidebar));
