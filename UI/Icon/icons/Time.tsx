import React, { FC } from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

// Assets
import { colors } from '../../../../assets';

// Types
import { IIconComponentProps } from '../types';


const Time: FC<IIconComponentProps> = ({ color, ...props }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#clip0_368_1176)">
        <Path fill={colors[color || 'primary']} d="M12 2.42812C6.72188 2.42812 2.42812 6.72188 2.42812 12C2.42812 17.2781 6.72188 21.5719 12 21.5719C17.2781 21.5719 21.5719 17.2781 21.5719 12C21.5719 6.72188 17.2781 2.42812 12 2.42812ZM12 23.4844C5.66719 23.4844 0.515625 18.3328 0.515625 12C0.515625 5.66719 5.66719 0.515625 12 0.515625C18.3328 0.515625 23.4844 5.66719 23.4844 12C23.4844 18.3328 18.3328 23.4844 12 23.4844Z" />
        <Path fill={colors[color || 'primary']} d="M16.1299 12.9562H12.0002C11.4705 12.9562 11.0439 12.5297 11.0439 12V4.60313C11.0439 4.07344 11.4705 3.64688 12.0002 3.64688C12.5299 3.64688 12.9564 4.07344 12.9564 4.60313V11.0437H16.1299C16.6596 11.0437 17.0861 11.4703 17.0861 12C17.0861 12.5297 16.6596 12.9562 16.1299 12.9562Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_368_1176">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Time;
