/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import { StyledHeader } from '../Header';
import { StyledSidebar } from '../Sidebar';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.page}>
        <StyledHeader />
        <StyledSidebar />
        <div className={s.pageContainer}>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
