import { ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';

// Types
import { IconsType } from '../Icon/types';


interface IFakeInputProps extends TouchableOpacityProps {
  wrapperStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: keyof IconsType;
  placeholder?: string;
  value?: string;
}
