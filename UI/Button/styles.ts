import { StyleSheet } from 'react-native';

// Assets
import { baseBorderRadius, colors, font, border, flexBox } from '../../../assets';


const styles = StyleSheet.create({
  button: {
    ...flexBox('row', 'center', 'center'),
    paddingVertical: 8,
    borderRadius: baseBorderRadius,
    backgroundColor: colors.white,
  },
  'button--primary': {
    backgroundColor: colors.primary
  },
  'button--primary-outline': {
    backgroundColor: colors.white,
    color: colors.primary,
    ...border('primary', 2, 'solid'),
  },
  'button--secondary': {

  },
  'button--disabled': {
    opacity: 0.6,
  },
  'button__text': {
    ...font(15, 400, 'white', 'center', 20),
  },
  'button__text--primary': {
    color: colors.white,
  },
  'button__text--primary-outline': {
    color: colors.primary,
  },
  'button__text--secondary': {
    color: colors.black880,
  },
});

export default styles;
