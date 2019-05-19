import { sheet } from '../services/nano';

export default sheet!({
  track: {
    display: 'grid',
    'line-height': 1.7,
    'grid-template-columns': '35px auto 250px',
    margin: '0 0 12px 0',
  },

  trackNumberContainer: {
    'align-items': 'center',
    display: 'flex',
  },

  trackNumber: {
    flex: 1,
    'font-size': '11px',
    'font-weight': 'bold',
    opacity: 0.5,
    'text-align': 'center',
  },

  trackDetails: {
    'font-weight': 600,
    margin: '0 10px 0 0',
  },

  trackTags: {
    'text-align': 'right',
  },
});
