import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

// Assets
import { colors } from '../../../../assets';

// Types
import { IIconComponentProps } from '../types';


const Church: FC<IIconComponentProps> = ({ color, ...props }) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <Path fill={colors[color || 'black']} d="M23.3967 15.7514L21.215 14.6606L17.4544 12.7803V9.09099C17.4544 8.72627 17.2722 8.38562 16.9686 8.18337L13.0909 5.59818V4.3638H14.1818C14.7842 4.3638 15.2727 3.87537 15.2727 3.27291C15.2727 2.67045 14.7842 2.18202 14.1818 2.18202H13.0909V1.09113C13.0909 0.488672 12.6025 0.000244141 12 0.000244141C11.3975 0.000244141 10.9091 0.488672 10.9091 1.09113V2.18202H9.81822C9.21576 2.18202 8.72733 2.67045 8.72733 3.27291C8.72733 3.87537 9.21576 4.3638 9.81822 4.3638H10.9091V5.59818L7.03137 8.18337C6.72788 8.38569 6.54556 8.72627 6.54556 9.09099V12.7803L2.78504 14.6606L0.603265 15.7514C0.064366 16.0209 -0.15403 16.6762 0.11542 17.215C0.306543 17.5973 0.691773 17.8182 1.09198 17.8182C1.25591 17.8182 1.42245 17.7812 1.57896 17.7028L2.182 17.4013V22.9088C2.182 23.5113 2.67043 23.9997 3.27289 23.9997H9.81822H14.1818H20.7271C21.3296 23.9997 21.818 23.5113 21.818 22.9088V17.4013L22.4211 17.7028C22.5776 17.7812 22.7441 17.8182 22.908 17.8182C23.3082 17.8182 23.6935 17.5972 23.8846 17.215C24.154 16.6762 23.9356 16.0209 23.3967 15.7514ZM10.9091 21.818V19.2726C10.9091 18.6711 11.3985 18.1817 12 18.1817C12.6015 18.1817 13.0909 18.6711 13.0909 19.2726V21.818H10.9091ZM19.6362 21.818H15.2727V19.2726C15.2727 17.4681 13.8046 16 12 16C10.1955 16 8.72733 17.4681 8.72733 19.2726V21.818H4.36378V16.3105L8.09789 14.4435L8.12429 14.4302C8.49388 14.2454 8.72733 13.8677 8.72733 13.4545V9.67483L12 7.49305L15.2727 9.67483V13.4545C15.2727 13.8678 15.5061 14.2454 15.8757 14.4302L15.8952 14.44L19.6362 16.3105V21.818H19.6362Z" />
      <Path fill={colors[color || 'black']} d="M11.9999 10.1819C11.3975 10.1819 10.9091 10.6703 10.9091 11.2728V12C10.9091 12.6025 11.3975 13.0909 11.9999 13.0909C12.6024 13.0909 13.0908 12.6025 13.0908 12V11.2728C13.0908 10.6703 12.6024 10.1819 11.9999 10.1819Z" />
    </Svg>
  );
};

export default Church;
