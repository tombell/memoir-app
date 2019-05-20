import { sheet } from '../utils/nano';

export default sheet!({
  container: {
    'align-items': 'center',
    display: 'flex',
    margin: '0 0 12px 0',
  },

  number: {
    flex: 1,
    'font-size': '10px',
    'font-weight': 'bold',
    opacity: 0.5,
  },

  details: {
    flex: 10,
  },

  tags: {
    display: 'flex',
    flex: 4,
    'justify-content': 'flex-end',
  },
}, 'track');
