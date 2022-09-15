// Assets
import colors from '../../colors';

const boxShadow = (width = 5, height = 5, radius = 14) => {
  return {
    shadowColor: colors.black,
    shadowOffset: { width, height },
    shadowRadius: radius,
    shadowOpacity: 0.1,

    // TODO: customize
    elevation: 10,
  };
};

export default boxShadow;
