import { FlexStyle } from 'react-native';


const flexBox = (flexDirection: FlexStyle['flexDirection'] = 'row', justifyContent: FlexStyle['justifyContent'] = 'flex-start', alignItems: FlexStyle['alignItems'] = 'stretch'): FlexStyle => {
  return {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
  };
};

export default flexBox;
