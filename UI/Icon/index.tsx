import React, { FC, memo } from 'react';

// Icons
import {
  Message,
  ArrowLeft,
  Menu,
  Search,
  Home,
  Events,
  Church,
  Pray,
  Donate,
  Bulb,
  Calendar,
  Priest,
  RitualSuccess,
  Time,
  Geolocation,
  DatePicker,
} from './icons';

// Types
import { IIconProps } from './types';

export const icons = {
  'message': Message,
  'arrow-left': ArrowLeft,
  'menu': Menu,
  'search': Search,
  'home': Home,
  'events': Events,
  'church': Church,
  'pray': Pray,
  'donate': Donate,
  'bulb': Bulb,
  'calendar': Calendar,
  'priest': Priest,
  'time': Time,
  'geolocation': Geolocation,
  'ritual-success': RitualSuccess,
  'date-picker': DatePicker,
};

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent {...props} />
  );
};

export default memo(Icon);
