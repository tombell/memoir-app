import colors from '../utils/colors';
import { sheet } from '../utils/nano';

export default sheet!({
  label: {
    background: colors.secondary,
    borderRadius: '3px',
    color: '#fff',
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: 'bold',
    margin: '0 5px 5px 0',
    padding: '3px 5px',
  },
}, 'tag');
