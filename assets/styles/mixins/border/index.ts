// Assets
import colors from '../../colors';

// Types
import { ColorsType } from '../../colors';
import { IBorder, BorderStyleType } from './types';

const border = (borderColor: keyof ColorsType = 'black', borderWidth: number = 1, borderStyle: BorderStyleType = 'solid'): IBorder => {
  return {
    borderWidth,
    borderColor: colors[borderColor],
    borderStyle,
  };
};

export default border;
