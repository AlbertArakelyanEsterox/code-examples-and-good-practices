import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';


interface ITooltipProps extends PropsWithChildren {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  parentStyle?: StyleProp<ViewStyle>;
}
