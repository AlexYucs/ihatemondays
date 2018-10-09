import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButton from '../src/components/RadioButton.js';

describe('rend test', function() {
  var component;
  beforeEach(function() {
    component = TestUtils.renderIntoDocument(<RadioButton text="Welcome to the Poll!"/>);
  });
  it('renders without problems', function() {
    expect(component).toEqual(jasmine.anything());
  });
});
