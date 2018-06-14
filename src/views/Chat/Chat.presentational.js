import React from 'react';
import PropTypes from 'prop-types';
import {StateProvider} from 'components';
import {styles} from './Chat.styles';
import {Message, Textbox} from './components';

const Messages = StateProvider(({messages}) => (
  <div style={styles.messagesContainer}>
    {messages.map((message, i) => <Message key={i.toString()} message={message} />)}
  </div>
));

export const ChatPresentational = ({messages, sendMessage}) => (
  <div style={styles.container}>
    <Messages messages={messages} />
    <Textbox sendMessage={sendMessage} />
  </div>
);

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendMessage: PropTypes.func.isRequired,
};

ChatPresentational.propTypes = propTypes;
Messages.propTypes = {messages: propTypes.messages};
