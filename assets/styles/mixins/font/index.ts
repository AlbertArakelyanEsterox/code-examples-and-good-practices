import { TextStyle } from 'react-native';

// Assets
import colors from '../../colors';

// Types
import { IFont } from './types';
import { ColorsType } from '../../colors';

const fonts: IFont = {
  100: 'NotoSansArmenian-Thin',
  200: 'NotoSansArmenian-ExtraLight',
  300: 'NotoSansArmenian-Light',
  400: 'NotoSansArmenian-Regular',
  500: 'NotoSansArmenian-Medium',
  600: 'NotoSansArmenian-SemiBold',
  700: 'NotoSansArmenian-Bold',
  800: 'NotoSansArmenian-ExtraBold',
  900: 'NotoSansArmenian-Black',
};

const font = (size: number, weight: keyof IFont, color: keyof ColorsType = 'black800', align: TextStyle['textAlign'] = 'left', lineHeight?: number) => {
  return {
    fontSize: size,
    fontFamily: fonts[weight],
    color: colors[color],
    textAlign: align,
    lineHeight,
  };
};

export default font;
