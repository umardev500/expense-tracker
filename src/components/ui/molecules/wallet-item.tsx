import {IconButton} from '@/components/ui/atoms';
import {type Wallet} from '@/types';
import {Image, Text, View} from 'react-native';

type Props = Wallet;

export const WalletItem = ({name, amount, source}: Props) => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-4">
        <View className="w-12 h-12 bg-pink-700 rounded-2xl overflow-hidden">
          <Image source={source} className="w-full h-full" />
        </View>
        <View>
          <Text className="text-white text-lg">{name}</Text>
          <Text className="text-white/60 text-base">${amount.toFixed(2)}</Text>
        </View>
      </View>

      <IconButton
        name="chevron_right"
        iconSize={28}
        iconColor="rgba(255,255,255,0.8)"
      />
    </View>
  );
};
