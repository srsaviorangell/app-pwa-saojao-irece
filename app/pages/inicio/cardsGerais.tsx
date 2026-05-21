import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  children: ReactNode;
  className?: string;
  
}

export default function Cardss({ children, className, style }: CardProps) {
  return (
    <View className={`${className || ''}`} style={style}>
      {children} 
    </View>
  );
}