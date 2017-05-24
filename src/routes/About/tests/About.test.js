import React from 'react';
import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
import 'jsdom-global/register';

import { About } from '../components/About';

describe('<About />', function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<About />).contains(<h3>About</h3>)).to.equal(true);
  });
});
