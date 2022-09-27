import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { useTranslation } from 'react-i18next';

// Styles
import styles from './styles';


const ErrorText: FC<TextProps> = ({ children, style, ...props }) => {
  const { t } = useTranslation();

  if (!children) {
    return null;
  }

  return (
    <Text
      style={[styles['error-text'], style]}
      {...props}
    >
      {t(children as string)}
    </Text>
  );
};

export default ErrorText;
