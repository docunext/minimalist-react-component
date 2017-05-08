import React from 'react';
import { StyledHomeView } from './components/HomeView';
import Layout from '../../components/Layout';

export default {

  path: '*',

  action() {
    return {	
        component: <Layout><StyledHomeView /></Layout>
    };
  },
};
