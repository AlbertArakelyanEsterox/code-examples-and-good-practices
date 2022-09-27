import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

// Assets
import { colors } from '../../../../assets';

// Types
import { IIconComponentProps } from '../types';


const ArrowLeft: FC<IIconComponentProps> = ({ color, ...props }) => {
  return (
    <Svg {...props} viewBox="0 0 14 22">
      <Path fill={colors[color || 'black']} d="M0.729776 10.9999C0.729776 10.6057 0.880323 10.2114 1.18078 9.91081L10.6404 0.451311C11.2421 -0.150437 12.2178 -0.150437 12.8193 0.451311C13.4208 1.05282 13.4208 2.02825 12.8193 2.63005L4.44889 10.9999L12.819 19.3699C13.4205 19.9716 13.4205 20.947 12.819 21.5484C12.2175 22.1505 11.2418 22.1505 10.6401 21.5484L1.18049 12.0891C0.879982 11.7883 0.729776 11.3941 0.729776 10.9999Z" />
    </Svg>
  );
};

export default ArrowLeft;
