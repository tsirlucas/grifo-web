import React from 'react';
import PropTypes from 'prop-types';

export class Textbox extends React.Component {
  state = {
    message: '',
  };

  onSend = () => {
    this.props.sendMessage({text: this.state.message, date: new Date()});
    this.setState({message: ''});
  };

  render() {
    const canSend = this.state.message.length > 0;

    return (
      <div style={styles.textbox}>
        <textarea
          value={this.state.message}
          style={styles.input}
          placeholder="Type your message..."
          onChange={(ev) => this.setState({message: ev.target.value})}
        />
        <button
          disabled={!canSend}
          onClick={this.onSend}
          style={{...styles.sendButton, ...(canSend ? {} : {color: 'gray'})}}
        >
          <span>Send</span>
        </button>
      </div>
    );
  }
}

Textbox.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
  textbox: {
    display: 'flex',
    padding: '10px 20px',
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    display: 'flex',
    resize: 'none',
    outline: 'none',
    borderRadius: 15,
    padding: 10,
    maxHeight: 150,
    fontSize: 14,
    flex: 1,
    backgroundColor: 'white',
  },
  sendButton: {
    outline: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    maxHeight: 70,
    alignSelf: 'center',
    fontSize: 14,
    alignItems: 'center',
    color: '#26AADB',
    fontWeight: 'bold',
  },
};
