import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

// Assets
import { colors } from '../../../assets';

// Styles
import styles from './styles';


const PageLoader = () => {
  return (
    <View style={styles['page-loader']}>
      <ActivityIndicator
        size={48}
        color={colors.primary}
      />
    </View>
  );
};

export default memo(PageLoader);
