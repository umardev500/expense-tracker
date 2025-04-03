import {Icon, IconName} from '@/components/custom-icon';
import {Spacer} from '@/components/spacer';
import clsx from 'clsx';
import {TouchableOpacity} from 'react-native';

type Props = {
  name: IconName;
  containerColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
};

export const IconButton = ({
  name,
  containerColor = 'transparent',
  size = 'sm',
  iconSize = 24,
  iconColor = 'black',
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      className={clsx('w-10 h-10 rounded-full items-center justify-center', {
        'w-8 h-8': size === 'sm',
        'w-10 h-10': size === 'md',
        'w-12 h-12': size === 'lg',
        'w-14 h-14': size === 'xl',
      })}
      style={{backgroundColor: containerColor}}
      onPress={onPress}>
      <Icon name={name} size={iconSize} color={iconColor} />
      <Spacer className="h-[2px]" />
    </TouchableOpacity>
  );
};
