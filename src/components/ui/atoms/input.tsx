import {Icon, IconName} from '@/components/custom-icon';
import React, {RefObject, useImperativeHandle, useState} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Pressable,
  SubmitBehavior,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';

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

// Function to render an icon if it's provided
const renderIcon = (
  iconColor: string,
  iconSize: number,
  icon?: React.ReactNode,
  iconName?: IconName,
  isIconFill?: boolean,
) => {
  if (icon) {
    return icon;
  }
  if (iconName) {
    return (
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor}
        fill={isIconFill}
      />
    );
  }
  return null;
};

type InputProps = {
  value?: string;
  placeholder?: string;
  leadingIcon?: React.ReactNode;
  leadingIconSize?: number;
  leadingIconName?: IconName;
  trailingIcon?: React.ReactNode;
  trailingIconName?: IconName;
  trailingIconSize?: number;
  iconColor?: string;
  isIconFill?: boolean;
  iconSize?: number;
  size?: 'lg' | 'xl';
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  onPress?: () => void;
  submitBehavior?: SubmitBehavior;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  ref?: RefObject<InputRef | null>;
};

// 🔹 Define the type for the InputRef
export type InputRef = {
  getValue: () => string;
  setValue: (text: string) => void;
  clear: () => void;
};

const Input = ({
  value,
  placeholder,
  leadingIcon,
  leadingIconName,
  leadingIconSize = 24,
  trailingIcon,
  trailingIconName,
  trailingIconSize = 24,
  iconColor = 'white',
  isIconFill = false,
  iconSize,
  size,
  keyboardType,
  editable = true,
  submitBehavior,
  onSubmitEditing,
  onPress,
  ref,
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const inputSizeClass = getInputSize(size);
  const [inputValue, setInputValue] = useState(value || '');

  useImperativeHandle(ref, () => {
    return {
      getValue: () => inputValue,
      setValue: (text: string) => setInputValue(text),
      clear: () => setInputValue(''),
    };
  });

  return (
    <Pressable disabled={!onPress} onPress={onPress}>
      <View
        className={`flex-row items-center gap-2 border ${
          !focused ? 'border-white/50' : 'border-white/90'
        }  px-4 ${inputSizeClass} h- rounded-2xl`}>
        {renderIcon(
          iconColor,
          iconSize ?? leadingIconSize,
          leadingIcon,
          leadingIconName,
          isIconFill,
        )}
        <View className="flex-1 flex-row items-center">
          {inputValue.length < 1 && !value ? (
            <Text className="absolute text-base text-white/50">
              {placeholder}
            </Text>
          ) : null}
          <TextInput
            value={value}
            keyboardType={keyboardType}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            editable={editable}
            onChangeText={setInputValue}
            className="text-base px-0 text-white/85 flex-1 h-full"
            placeholderTextColor={'rgba(255,255,255,0.5)'}
            submitBehavior={submitBehavior}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        {renderIcon(
          iconColor,
          iconSize ?? trailingIconSize,
          trailingIcon,
          trailingIconName,
          isIconFill,
        )}
      </View>
    </Pressable>
  );
};

export {Input};
