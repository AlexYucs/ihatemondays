import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButton from '../src/components/RadioButton.js';
import TestWrapper from '../src/components/TestWrapper.js';

describe('rend test', function() {
  var component;
  beforeEach(function() {
    component = TestUtils.renderIntoDocument(<TestWrapper><RadioButton text="Welcome to the Poll!"/></TestWrapper>);
  });
  it('renders without problems', function() {
    expect(component).toEqual(jasmine.anything());
  });
});
