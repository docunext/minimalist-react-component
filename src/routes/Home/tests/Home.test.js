import React from 'react';
import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
import 'jsdom-global/register';

import { HomeView } from '../components/HomeView';

describe('<HomeView />', function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<HomeView />).contains(<h1>Hello, world!</h1>)).to.equal(true);
  });
});
