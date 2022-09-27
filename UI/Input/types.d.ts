import { TextInputProps, ViewStyle } from 'react-native';

// Types
import { IconsType } from '../Icon/types';


interface IInputProps extends TextInputProps {
  wrapperStyle?: ViewStyle;
  icon?: keyof IconsType;
}
