import colors from '../utils/colors';
import { global, sheet } from '../utils/nano';

global!({
  body: {
    background: '#2c2a31',
    color: colors.primary,
    'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
});

export default sheet!({
  container: {
    'align-items': 'center',
    display: 'flex',
    'justify-content': 'center',
  },

  column: {
    flex: 1,
    'max-width': '960px',
  },
}, 'page');
