import {Size} from '@/types';
import clsx from 'clsx';
import {TouchableOpacity} from 'react-native';

type ButtonProps = {
  color?: string;
  size?: Size;
  children?: React.ReactNode;
  className?: string;
  corderRadius?: number;
  onPress?: () => void;
};

const Button = ({
  color,
  size,
  children,
  className,
  corderRadius = 15,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={clsx(
        'px-4 flex-row items-center justify-center',
        {
          'h-8': size === 'xs',
          'h-10': size === 'sm',
          'h-12': size === 'md',
          'h-14': size === 'lg',
          'h-16': size === 'xl',
        },
        className,
      )}
      style={{
        backgroundColor: color,
        borderRadius: corderRadius,
      }}>
      {children}
    </TouchableOpacity>
  );
};

export {Button};
