import { StyleSheet, Dimensions } from 'react-native';

// Assets
import { flexBox } from '../../../assets';

const dimensions = Dimensions.get('window');


const styles = StyleSheet.create({
  'page-loader': {
    width: '100%',
    height: dimensions.height,
    ...flexBox('row', 'center', 'center'),
  },
});

export default styles;
