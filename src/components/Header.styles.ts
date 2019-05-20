import colors from '../utils/colors';
import { sheet } from '../utils/nano';

export default sheet!({
  link: {
    color: colors.primary,
    textDecoration: 'none',
    ':hover': {
      color: colors.secondary,
    },
  },
}, 'header');
