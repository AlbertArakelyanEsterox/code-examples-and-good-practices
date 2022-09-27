import React, { FC, memo } from 'react';
import { TextInput, View } from 'react-native';

// Components
import { Icon } from '../../index';

// Assets
import { colors } from '../../../assets';

// Types
import { IInputProps } from './types';

// Styles
import styles from './styles';

const Input: FC<IInputProps> = ({ icon, wrapperStyle, style, ...props }) => {
  return (
    <View style={[styles['input-wrapper'], wrapperStyle]}>
      {icon && (
        <View style={styles['input__icon']}>
          <Icon name={icon} width={16} height={16} color="black800" />
        </View>
      )}
      <TextInput
        style={[styles['input'], icon && styles['input--icon'], style]}
        placeholderTextColor={colors.black500}
        selectionColor={colors.black800}
        {...props}
      />
    </View>
  );
};

export default memo(Input);
