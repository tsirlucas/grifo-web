import React from 'react';
import renderer from 'react-test-renderer';

import {Layout} from './Layout';

function wrap(props) {
  const wrapper = renderer.create(<Layout {...props} />);

  return {
    component: wrapper,
  };
}
describe('Layout component', () => {
  const props = {
    children: <span>Hello</span>,
  };

  it('should itself and children', () => {
    const rendered = wrap(props).component.toJSON();
    expect(rendered).toBeTruthy();
  });
});
