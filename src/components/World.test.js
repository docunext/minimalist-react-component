import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import World from './World';

describe('<World />', function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<World />).contains(<h1>Hello, world!</h1>)).to.equal(true);
  });
});
