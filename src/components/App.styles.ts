import { global, sheet } from '../services/nano';

global!({
  body: {
    background: '#2c2a31',
    color: '#e8dcd8',
    'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
});

export default sheet!({
  page: {
    margin: '0 auto',
    width: '690px',
  },
});
