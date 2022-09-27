import { StyleSheet } from 'react-native';

// Assets
import { font } from '../../../assets';

const styles = StyleSheet.create({
  'tooltip': {
    minWidth: 130,
  },
  'tooltip__content': {
    ...font(14, 600, 'black800', 'center', 18),
  },
});

export default styles;
