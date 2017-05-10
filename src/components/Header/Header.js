import React from 'react';
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import SetName from '../../containers/setName';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.linkText = props.myName || 'Something';
    }

    render() {
        this.linkText = this.props.myName || 'Something';
        return (
            <div className={s.header}>
                <ul>
                <li>
                <SetName />
                </li>
                <li>
                <Link to="/">{this.linkText}</Link>
                </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  let myName = state.testApp.myName || '';
  return {
      myName
  };
}
export const StyledHeader = connect(mapStateToProps)(withStyles(s)(Header));
