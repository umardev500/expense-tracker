import {Icon} from '@/components/custom-icon';
import clsx from 'clsx';
import {TouchableOpacity} from 'react-native';

type Props = {
  containerClassName?: string;
  iconColor?: string;
  iconSize?: number;
  onPress?: () => void;
};

export const Fab = ({
  containerClassName,
  iconColor = 'black',
  iconSize = 24,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={clsx(
        'absolute bottom-6 right-6 w-14 h-14 shadow-xl shadow-lime-900 rounded-full items-center justify-center bg-lime-600',
        containerClassName,
      )}>
      <Icon name="add" size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};
