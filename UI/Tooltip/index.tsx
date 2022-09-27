import React, { FC, useState } from 'react';
import { Pressable, Text } from 'react-native';
import TooltipWalkthrough from 'react-native-walkthrough-tooltip';

// Types
import { ITooltipProps } from './types';

// Styles
import styles from './styles';


const Tooltip: FC<ITooltipProps> = ({ text, style, onPress, parentStyle, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const handleOpenTooltip = () => {
    setIsOpen(true);
  };

  const handleCloseTooltip = () => {
    setIsOpen(false);
  };

  const handlePress = () => {
    handleOpenTooltip();
    onPress && onPress();
  };

  const tooltipContent = (
    <Text style={styles['tooltip__content']}>{text}</Text>
  );

  return (
    // @ts-ignore this package doesn't provide the children prop
    <TooltipWalkthrough
      isVisible={isOpen}
      content={tooltipContent}
      onClose={handleCloseTooltip}
      placement="top"
      tooltipStyle={styles['tooltip']}
      parentWrapperStyle={parentStyle}
    >
      <Pressable
        onPress={handlePress}
        style={style}
      >
        {children}
      </Pressable>
    </TooltipWalkthrough>
  );
};

export default Tooltip;
