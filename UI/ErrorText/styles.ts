import { StyleSheet } from 'react-native';

// Assets
import { font, spacing } from '../../../assets';


const styles = StyleSheet.create({
  'error-text': {
    marginTop: spacing(2),
    ...font(14, 500, 'red', 'center', 16),
  },
});

export default styles;
