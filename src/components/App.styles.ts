import colors from '../utils/colors';
import { global, sheet } from '../utils/nano';

global!({
  body: {
    background: colors.background,
    color: colors.primary,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
});

export default sheet!({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  column: {
    flex: 1,
    maxWidth: '960px',
  },
}, 'page');
