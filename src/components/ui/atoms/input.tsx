import React, {useState} from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';

const getInputSize = (size?: 'lg' | 'xl'): string => {
  let hClass;
  switch (size) {
    case 'lg':
      hClass = 'h-14';
      break;
    case 'xl':
      hClass = 'h-16';
      break;
    default:
      hClass = 'h-12';
  }

  return hClass;
};

type InputProps = {
  placeholder?: string;
  leadingIcon?: React.ReactNode;
  size?: 'lg' | 'xl';
  keyboardType?: KeyboardTypeOptions;
};

const Input = ({placeholder, leadingIcon, size, keyboardType}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const inputSizeClass = getInputSize(size);

  return (
    <View
      className={`flex-row items-center gap-2 border ${
        !focused ? 'border-white/50' : 'border-white/90'
      }  px-4 ${inputSizeClass} h- rounded-2xl`}>
      {leadingIcon && leadingIcon}
      <TextInput
        keyboardType={keyboardType}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        className="text-base text-white flex-1 h-full"
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        placeholder={placeholder}
      />
    </View>
  );
};

export {Input};
