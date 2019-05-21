import queries from '../utils/media-queries';
import { sheet } from '../utils/nano';

export default sheet!({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap-reverse',
    margin: '0 0 12px 0',

    [queries.mobile]: {
      margin: '0 0 20px 0',
    },
  },

  number: {
    flexBasis: '10%',
    fontSize: '10px',
    fontWeight: 'bold',
    opacity: 0.5,
  },

  details: {
    flex: 10,
    padding: '0 0 0 5px',
  },

  tags: {
    display: 'flex',
    flex: 4,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',

    [queries.mobile]: {
      flexBasis: '100%',
      justifyContent: 'flex-start',
      margin: '5px 0 0 0',
    },
  },
}, 'track');
