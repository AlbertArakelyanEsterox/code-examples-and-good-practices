import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Components
import { Icon } from '../../index';

// Types
import { IFakeInputProps } from './types';

// Styles
import styles from './styles';


const FakeInput: FC<IFakeInputProps> = ({ value, placeholder, icon, textStyle, wrapperStyle, style, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles['input-wrapper'], wrapperStyle]} {...props}>
      {icon && (
        <View style={styles['input__icon']}>
          <Icon name={icon} width={16} height={16} color="black800" />
        </View>
      )}
      <View style={[styles['input'], icon && styles['input--icon'], style]}>
        <Text style={[styles['input__text'], !!(!value && placeholder) && styles['input__text--placeholder'], textStyle]}>
          {value || placeholder || ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(FakeInput);
