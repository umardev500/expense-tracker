import {Icon, IconName} from '@/components/custom-icon';
import {Spacer} from '@/components/spacer';
import {ReactNode} from 'react';
import {Pressable, View} from 'react-native';

type Props = {
  onPress?: () => void;
  icon: IconName;
};

export const HeaderAction = ({onPress, icon}: Props) => {
  return (
    <Pressable
      className="w-8 h-8 items-center justify-center"
      onPress={onPress}>
      <Icon name={icon} size={24} color="white" />
      <Spacer className="h-[2px]" />
    </Pressable>
  );
};

export const HeaderActions = ({children}: {children: ReactNode}) => {
  return <View className="flex-row items-center gap-4">{children}</View>;
};
