import {IconButton} from '@/components/ui/atoms';
import {type Wallet} from '@/types';
import {Text, View} from 'react-native';

type Props = Wallet;

export const WalletItem = ({name, amount}: Props) => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-4">
        <View className="w-14 h-14 bg-pink-700 rounded-2xl" />
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
