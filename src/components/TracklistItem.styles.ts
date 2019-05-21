import colors from '../utils/colors';
import { sheet } from '../utils/nano';

export default sheet!({
  item: {
    alignItems: 'center',
    display: 'flex',
    margin: '0 0 15px 0',
  },

  date: {
    flexBasis: '10%',
    fontSize: '10px',
    fontWeight: 'bold',
    opacity: 0.5,
  },

  name: {
    flex: 3,
    padding: '0 0 0 5px',
  },

  link: {
    color: colors.primary,
    textDecoration: 'none',
    ':hover': {
      color: colors.secondary,
    },
  },

  tracks: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
}, 'tracklist');
