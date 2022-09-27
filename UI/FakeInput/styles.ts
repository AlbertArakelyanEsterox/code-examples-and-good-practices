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
    backgroundColor: colors.white,
    borderRadius: baseBorderRadius,
    ...boxShadow(0, 4, 8, 7),
    ...flexBox('row', 'center', 'center'),
  },
  'input__icon': {
    position: 'absolute',
    zIndex: 2,
    left: 16,
  },
  'input': {
    paddingHorizontal: 12,
    paddingVertical: 0,
    width: '100%',
    height: 56,
    ...flexBox('row', 'flex-start', 'center'),
  },
  'input--icon': {
    paddingLeft: 48,
  },
  'input__text': {
    ...font(16, 400, 'black800'),
  },
  'input__text--placeholder': {
    ...font(16, 400, 'black500'),
  },
});

export default styles;
