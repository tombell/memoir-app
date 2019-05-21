import { sheet } from '../utils/nano';

export default sheet!({
  container: {
    alignItems: 'center',
    display: 'flex',
    margin: '0 0 12px 0',
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
    justifyContent: 'flex-end',
  },
}, 'track');
