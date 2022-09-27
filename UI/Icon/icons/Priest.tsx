import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

// Assets
import { colors } from '../../../../assets';

// Types
import { IIconComponentProps } from '../types';


const Priest: FC<IIconComponentProps> = ({ color, ...props }) => {
  return (
    <Svg {...props} viewBox="0 0 30 30">
      <Path d="M15 16.25C18.4518 16.25 21.25 13.4518 21.25 10C21.25 6.54822 18.4518 3.75 15 3.75C11.5482 3.75 8.75 6.54822 8.75 10C8.75 13.4518 11.5482 16.25 15 16.25Z" stroke={colors[color || 'black']} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M25 26.25C25 23.5978 23.9464 21.0543 22.0711 19.1789C20.1957 17.3036 17.6522 16.25 15 16.25C12.3478 16.25 9.8043 17.3036 7.92893 19.1789C6.05357 21.0543 5 23.5978 5 26.25M25 26.25C25 23.5978 23.9464 21.0543 22.0711 19.1789C20.1957 17.3036 17.6522 16.25 15 16.25C12.3478 16.25 9.8043 17.3036 7.92893 19.1789C6.05357 21.0543 5 23.5978 5 26.25H25Z" stroke={colors[color || 'black']} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Priest;
