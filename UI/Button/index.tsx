import React, { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Components
import Icon from '../Icon';

// Types
import { IButtonProps } from './types';

// Styles
import styles from './styles';


const Button: FC<PropsWithChildren<IButtonProps>> = ({ variant = 'primary', icon, style = {}, textStyle = {}, children, disabled, ...props }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.6}
      style={[styles['button'], styles[`button--${variant}`], disabled && styles['button--disabled'], style]}
      {...props}
    >
      {icon && (
        <Icon {...icon} />
      )}
      {typeof children === 'string' ? (
        <Text style={[styles['button__text'], styles[`button__text--${variant}`],textStyle]}>
          {children}
        </Text>
      ) : children}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
