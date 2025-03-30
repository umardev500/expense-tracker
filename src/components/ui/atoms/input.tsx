import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

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
};

const Input = ({placeholder, leadingIcon, size}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const inputSizeClass = getInputSize(size);

  return (
    <View
      className={`flex-row items-center gap-2 border ${
        !focused ? 'border-gray-500' : 'border-gray-400'
      }  px-4 ${inputSizeClass} h- rounded-lg`}>
      {leadingIcon && leadingIcon}
      <TextInput
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        className="text-base text-white flex-1 h-full"
        placeholderTextColor={'#9ca3af'}
        placeholder={placeholder}
      />
    </View>
  );
};

export {Input};
