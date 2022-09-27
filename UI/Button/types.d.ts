import { StyleProp, ViewStyle, TextStyle, TouchableWithoutFeedbackProps } from 'react-native';

// Types
import { IIconProps } from '../Icon/types';


export interface IButtonProps extends TouchableWithoutFeedbackProps {
  variant?: ButtonVariants;
  icon?: IIconProps;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

type ButtonVariants = 'primary' | 'secondary' | 'primary-outline';
