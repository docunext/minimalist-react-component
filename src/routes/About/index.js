import React from 'react';
import { StyledAbout } from './components/About';
import Layout from '../../containers/Layout';

export default {

  path: '/about',

  action() {
    return {	
        title: 'About',
        component: <Layout><StyledAbout /></Layout>
    };
  },
};
