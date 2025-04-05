import {IconBox, IconBoxProps, IconButton} from '@/components/ui/atoms';
import {Text, TouchableOpacity, View} from 'react-native';

export type MenuItemProps = {
  title: string;
  iconBox?: IconBoxProps;
  color?: string;
  onPress?: () => void;
};

export const MenuItem = ({
  title,
  iconBox,
  color = 'white',
  onPress,
}: MenuItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-4">
        {iconBox && <IconBox {...iconBox} />}
        <View>
          <Text className="text-lg" style={{color}}>
            {title}
          </Text>
        </View>
      </View>

      <IconButton name={'chevron_right'} iconSize={28} iconColor={color} />
    </TouchableOpacity>
  );
};
