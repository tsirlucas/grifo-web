import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {styles} from './Message.styles';

export const Message = ({message}) => (
  <div style={styles.messageContainer}>
    <div style={styles.leftContainer}>
      <img
        style={styles.image}
        src="https://api.adorable.io/avatars/285/tsirlucas@gmail.com.png"
        alt="avatar"
      />
    </div>
    <div style={styles.rightContainer}>
      <div style={styles.titleContainer}>
        <span style={styles.nameText}>Lucas</span>
        <span style={styles.timeText}>
          {moment(message.date)
            .startOf('minute')
            .fromNow()}
        </span>
      </div>
      <div>
        <span style={styles.messageText}>{message.text}</span>
      </div>
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.object.isRequired,
};
