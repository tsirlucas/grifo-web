import {styles as textboxStyles} from './components/Textbox';

export const styles = {
  container: {
    flex: 1,
  },
  messagesContainer: {
    maxHeight: `calc(100vh - ${textboxStyles.input.maxHeight}px`,
    overflow: 'auto',
  },
};
