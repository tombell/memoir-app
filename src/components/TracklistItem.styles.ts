import { sheet } from '../services/nano';

export default sheet!({
  tracklist: {
    display: 'grid',
    'grid-template-columns': 'auto auto',
    'flex-grow': 1,
    'justify-content': 'left',
    padding: '2px',
    width: '40%',
  },

  name: {
  },

  link: {
    color: '#e8dcd8',
    'text-decoration': 'none',
    ':hover': {
      color: '#e96467',
    },
  },

  date: {
    display: 'flex',
    'align-items': 'center',
    'margin-left': 'auto',

    span: {
      'min-width': '70px',
      'text-align': 'center',
    }
  },
}, 'tracklist');
