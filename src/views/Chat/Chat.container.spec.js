import React from 'react';
import renderer from 'react-test-renderer';

import {UnconnectedChat} from './Chat.container';

function wrap(props) {
  const wrapper = renderer.create(<UnconnectedChat {...props} />);

  return {
    component: wrapper,
  };
}

const mockedDate = new Date();
mockedDate.setDate(mockedDate.getDate() - 2);

const mockedDate2 = new Date();
mockedDate2.setDate(mockedDate2.getDate() - 1);

const mockedMessages = [
  {
    text: 'Test',
    date: mockedDate,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text: 'Test end',
    date: mockedDate,
  },
];

describe('Chat container', () => {
  it('should render Chat container with messages without crashing', () => {
    const props = {
      messages: mockedMessages,
      actions: {
        sendMessage: () => null,
      },
    };

    const rendered = wrap(props).component.toJSON();
    expect(rendered).toBeTruthy();
  });

  it('should render Chat container without messages without crashing', () => {
    const props = {
      messages: [],
      actions: {
        sendMessage: () => null,
      },
    };

    const rendered = wrap(props).component.toJSON();
    expect(rendered).toBeTruthy();
  });
});
