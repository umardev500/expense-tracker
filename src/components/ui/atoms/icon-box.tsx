import {Icon, IconName} from '@/components/custom-icon';
import {Spacer} from '@/components/spacer';
import {Size} from '@/types';
import clsx from 'clsx';
import {View} from 'react-native';

export type IconBoxProps = {
  icon: IconName;
  color?: string;
  containerColor?: string;
  filled?: boolean;
  iconSize?: number;
  boxSize?: Exclude<Size, 'xs' | 'sm'>;
};

export const IconBox = ({
  icon,
  color = 'white',
  containerColor,
  filled,
  iconSize = 24,
  boxSize = 'md',
}: IconBoxProps) => {
  return (
    <View
      className={clsx(
        'items-center justify-center rounded-2xl overflow-hidden',
        {
          'w-10 h-10': boxSize === 'md',
          'w-12 h-12': boxSize === 'lg',
          'w-14 h-14': boxSize === 'xl',
        },
      )}
      style={{backgroundColor: containerColor}}>
      <Icon name={icon} color={color} fill={filled} size={iconSize} />
      <Spacer className="h-[2px]" />
    </View>
  );
};
