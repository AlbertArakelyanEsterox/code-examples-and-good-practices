import React, { FC } from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

// Assets
import { colors } from '../../../../assets';

// Types
import { IIconComponentProps } from '../types';


const Search: FC<IIconComponentProps> = ({ color, ...props }) => {
  return (
    <Svg {...props} viewBox="0 0 16 16">
      <G opacity={0.7} clipPath="url(#clip0_202_1452)">
        <Path fill={colors[color || 'black']} d="M7.04606 0C3.16097 0 0 3.16097 0 7.04606C0 10.9314 3.16097 14.0921 7.04606 14.0921C10.9314 14.0921 14.0921 10.9314 14.0921 7.04606C14.0921 3.16097 10.9314 0 7.04606 0ZM7.04606 12.7913C3.87816 12.7913 1.30081 10.214 1.30081 7.04609C1.30081 3.87819 3.87816 1.30081 7.04606 1.30081C10.214 1.30081 12.7913 3.87816 12.7913 7.04606C12.7913 10.214 10.214 12.7913 7.04606 12.7913Z" />
        <Path fill={colors[color || 'black']} d="M15.8095 14.8898L12.0805 11.1608C11.8264 10.9067 11.4149 10.9067 11.1608 11.1608C10.9067 11.4146 10.9067 11.8266 11.1608 12.0804L14.8898 15.8094C15.0168 15.9365 15.1831 16 15.3496 16C15.5159 16 15.6824 15.9365 15.8095 15.8094C16.0636 15.5556 16.0636 15.1436 15.8095 14.8898Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_202_1452">
          <Rect {...props} fill={colors[color || 'black']} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Search;
