import colors from '../utils/colors';
import { sheet } from '../utils/nano';

export default sheet!({
  item: {
    'align-items': 'center',
    display: 'flex',
    margin: '0 0 15px 0',
  },

  date: {
    'flex-basis': '10%',
    'font-size': '10px',
    'font-weight': 'bold',
    opacity: 0.5,
  },

  name: {
    flex: 3,
  },

  link: {
    color: colors.primary,
    'text-decoration': 'none',
    ':hover': {
      color: colors.secondary,
    },
  },

  tracks: {
    display: 'flex',
    flex: 1,
    'justify-content': 'flex-end',
  },
}, 'tracklist');
