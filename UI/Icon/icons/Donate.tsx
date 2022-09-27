import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

// Assets
import { colors } from '../../../../assets';

// Types
import { IIconComponentProps } from '../types';


const Donate: FC<IIconComponentProps> = ({ color, ...props }) => {
  return (
    <Svg {...props} viewBox="0 0 34 34">
      <Path d="M22.6667 8.89633C22.6667 9.74836 22.3302 10.5667 21.7293 11.172C20.3461 12.566 19.0046 14.0194 17.5697 15.3628C17.2409 15.6662 16.7191 15.6552 16.4043 15.338L12.2705 11.172C11.021 9.91279 11.021 7.87987 12.2705 6.62066C13.5323 5.34906 15.5879 5.34906 16.8496 6.62066L16.9999 6.77207L17.1501 6.62074C17.7551 6.01074 18.5791 5.66669 19.4397 5.66669C20.3004 5.66669 21.1244 6.01071 21.7293 6.62066C22.3302 7.22605 22.6667 8.04435 22.6667 8.89633Z" stroke={colors[color || 'black']} strokeWidth="2" strokeLinejoin="round"/>
      <Path d="M25.5 28.3333L30.9178 22.9156C31.0771 22.7562 31.1667 22.54 31.1667 22.3146V14.875C31.1667 13.7014 30.2152 12.75 29.0417 12.75C27.8681 12.75 26.9167 13.7014 26.9167 14.875V21.25" stroke={colors[color || 'black']} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M25.5 22.6667L26.7156 21.4511C26.8444 21.3223 26.9166 21.1477 26.9166 20.9658C26.9166 20.7059 26.7697 20.4683 26.5372 20.352L25.9098 20.0384C24.8191 19.4929 23.5016 19.7067 22.6393 20.569L21.3715 21.8368C20.8401 22.3682 20.5416 23.0889 20.5416 23.8403V28.3334" stroke={colors[color || 'black']} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M8.50004 28.3333L3.08234 22.9156C2.92292 22.7562 2.83337 22.54 2.83337 22.3146V14.875C2.83337 13.7014 3.78476 12.75 4.95837 12.75C6.13198 12.75 7.08337 13.7014 7.08337 14.875V21.25" stroke={colors[color || 'black']} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M8.50004 22.6667L7.28436 21.4511C7.15567 21.3223 7.08337 21.1477 7.08337 20.9658C7.08337 20.7059 7.23023 20.4683 7.4627 20.352L8.09016 20.0384C9.18095 19.4929 10.4984 19.7067 11.3607 20.569L12.6285 21.8368C13.1599 22.3682 13.4584 23.0889 13.4584 23.8403V28.3334" stroke={colors[color || 'black']} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Donate;
