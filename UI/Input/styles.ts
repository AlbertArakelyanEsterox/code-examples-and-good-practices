import { StyleSheet } from 'react-native';

// Assets
import {
  boxShadow,
  flexBox,
  font,
  baseBorderRadius,
  colors,
} from '../../../assets';

const styles = StyleSheet.create({
  'input-wrapper': {
    position: 'relative',
    ...flexBox('row', 'center', 'center'),
  },
  'input__icon': {
    position: 'absolute',
    zIndex: 1,
    left: 16,
  },
  'input': {
    paddingHorizontal: 12,
    paddingVertical: 0,
    backgroundColor: colors.white,
    borderRadius: baseBorderRadius,
    width: '100%',
    height: 56,
    ...boxShadow(0, 4, 8, 7),
    ...font(16, 400, 'black800'),
  },
  'input--icon': {
    paddingLeft: 48,
  },
});

export default styles;
