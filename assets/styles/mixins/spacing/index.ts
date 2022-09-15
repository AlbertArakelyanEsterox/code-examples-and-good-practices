// Assets
import { baseSpacing } from '../../sizes';

// Types
import { MultiplierType } from './types';

const spacing = (multiplier: MultiplierType): number => {
  switch (multiplier) {
    case 1:
      return baseSpacing * 0.5
    case 2:
      return baseSpacing;
    case 3:
      return baseSpacing * 2;
    case 4:
      return baseSpacing * 3;
    case 5:
      return baseSpacing * 4;
    default:
      return baseSpacing;
  }
};

export default spacing;
