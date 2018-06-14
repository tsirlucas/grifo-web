import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

function wrap() {
  const wrapper = renderer.create(<App />);

  return {
    component: wrapper,
  };
}
describe('Home container', () => {
  it('should render Home page with no pendencies without crashing', () => {
    const rendered = wrap().component.toJSON();
    expect(rendered).toBeTruthy();
  });
});
