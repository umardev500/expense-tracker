import {Icon} from '@/components/custom-icon';
import {Size} from '@/types';
import clsx from 'clsx';
import {Pressable, Text, View} from 'react-native';

type Props = {
  onPress?: () => void;
  size?: Size;
};

export const UploadImageButton = ({onPress, size = Size.sm}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View
        className={clsx(
          'w-full bg-white/10 rounded-2xl border border-white/50 border-dashed',
          {
            'h-10': size === 'sm',
            'h-12': size === 'md',
            'h-14': size === 'lg',
            'h-16': size === 'xl',
          },
        )}>
        <View className="flex-1 gap-2 flex-row items-center justify-center">
          <Icon
            style={{marginBottom: 2}}
            name="arrow_upward"
            size={24}
            color="white"
          />
          <Text className="text-white/80 text-base">Upload Image</Text>
        </View>
      </View>
    </Pressable>
  );
};
