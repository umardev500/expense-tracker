import {IconButton} from '@/components/ui/atoms';
import {WalletList} from '@/components/ui/organisms';
import {Wallet} from '@/types';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Wallets = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const wallets: Wallet[] = [
    {
      name: 'Freelancing',
      amount: 95.04,
      source: require('@/assets/images/icons/wallet.png'),
    },
    {
      name: 'Salary',
      amount: 1000,
      source: require('@/assets/images/icons/wallet-11.png'),
    },
    {
      name: 'Savings',
      amount: 350,
      source: require('@/assets/images/icons/wallet-3.png'),
    },
    {
      name: 'Random',
      amount: 210,
      source: require('@/assets/images/icons/wallet-9.png'),
    },
  ];

  return (
    <View className="flex-1 bg-darkbg" style={{paddingTop: top}}>
      <View className="h-48 p-4 items-center justify-center">
        <Text className="text-5xl text-white font-bold">$334.00</Text>
        <Text className="text-lg text-white">Total Balance</Text>
      </View>

      <View className="bg-white/10 flex-1 rounded-tl-3xl rounded-tr-3xl px-4 py-6">
        <View className="flex-row items-center justify-between">
          <Text className="text-white text-xl">My Wallets</Text>
          <IconButton
            onPress={() => {
              navigation.navigate('NewWallet', {});
            }}
            iconColor="black"
            containerColor="#84cc16"
            name="add"
          />
        </View>

        <View className="mt-6">
          <WalletList data={wallets} />
        </View>
      </View>
    </View>
  );
};
