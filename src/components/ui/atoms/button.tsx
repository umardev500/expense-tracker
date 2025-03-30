import {Text, TouchableOpacity, View} from 'react-native';

const getButtonSize = (size?: 'lg' | 'xl') => {
  let sizes = {
    button: '',
    text: '',
  };

  switch (size) {
    case 'lg':
      sizes.button = 'h-14';
      sizes.text = 'text-lg';
      break;
    case 'xl':
      sizes.button = 'h-16';
      sizes.text = 'text-xl';
      break;
    default:
      sizes.button = 'h-12';
      sizes.text = 'text-base';
  }

  return sizes;
};

type ButtonProps = {
  text: string;
  color: string;
  size?: 'lg' | 'xl';
  fw?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
  fc?: string;
};

const Button = ({
  text,
  color,
  size,
  fw = 'font-normal',
  fc = 'text-white',
}: ButtonProps) => {
  const sizes = getButtonSize(size);

  return (
    <TouchableOpacity className="w-full" onPress={() => {}}>
      <View
        className={`${color} ${sizes.button} rounded-xl px-4 flex-row items-center justify-center`}>
        <Text className={`${sizes.text} ${fw} ${fc}`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {Button};
