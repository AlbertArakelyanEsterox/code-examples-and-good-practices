import { icons } from './index';

// Assets
import { ColorsType } from '../../../assets/styles/colors';

type IconsType = typeof icons;

interface IIconComponentProps {
  width?: number;
  height?: number;
  color?: keyof ColorsType;
}

interface IIconProps extends IIconComponentProps {
  name: keyof IconsType;
}

