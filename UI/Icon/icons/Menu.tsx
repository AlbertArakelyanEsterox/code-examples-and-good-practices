import React, { FC } from 'react';
import Svg, { Path, G } from 'react-native-svg';

// Assets
import { colors } from '../../../../assets';

// Types
import { IIconComponentProps } from '../types';


const Menu: FC<IIconComponentProps> = ({ color, ...props }) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <G opacity={0.7}>
        <Path fill={colors[color || 'black']} d="M0.9375 11.0625H23.0625C23.5803 11.0625 24 11.4822 24 12C24 12.5178 23.5803 12.9375 23.0625 12.9375H0.9375C0.41972 12.9375 0 12.5178 0 12C0 11.4822 0.41972 11.0625 0.9375 11.0625Z" />
        <Path fill={colors[color || 'black']} d="M0.9375 3.5625H23.0625C23.5803 3.5625 24 3.98222 24 4.5C24 5.01778 23.5803 5.4375 23.0625 5.4375H0.9375C0.41972 5.4375 0 5.01778 0 4.5C0 3.98222 0.41972 3.5625 0.9375 3.5625Z" />
        <Path fill={colors[color || 'black']} d="M0.9375 18.5625H23.0625C23.5803 18.5625 24 18.9822 24 19.5C24 20.0178 23.5803 20.4375 23.0625 20.4375H0.9375C0.41972 20.4375 0 20.0178 0 19.5C0 18.9822 0.41972 18.5625 0.9375 18.5625Z" />
      </G>
    </Svg>
  );
};

export default Menu;
