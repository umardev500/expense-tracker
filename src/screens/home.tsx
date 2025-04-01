import {Icon} from '@/components/custom-icon';
import {TransactionCategory, TransactionProps} from '@/components/ui/molecules';
import {TransactionList} from '@/components/ui/organisms';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Home = () => {
  const transactions: TransactionProps[] = [
    {
      id: '1',
      data: {
        category: TransactionCategory.EXPENSE,
        description: 'Checkup fee',
        inOrOut: 'out',
        amount: 30,
        date: '26 Nov',
        iconContainerClassName: 'bg-red-500',
      },
    },
    {
      id: '2',
      data: {
        category: TransactionCategory.INCOME,
        description: 'Random money',
        inOrOut: 'in',
        amount: 50,
        date: '26 Nov',
        iconContainerClassName: 'bg-green-500',
      },
    },
  ];

  return (
    <SafeAreaView>
      <View className="p-4">
        {/* Header */}
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white/50 text-xl">Hello,</Text>
            <Text className="text-white text-2xl">Steven Jhon</Text>
          </View>
          <View className="bg-white/20 rounded-full w-11 h-11 items-center justify-center">
            <TouchableOpacity>
              <Icon name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent transactions */}
        <View className="mt-6 gap-4">
          <Text className="text-white text-2xl">Recent transactions</Text>
          <TransactionList data={transactions} />
        </View>
      </View>
    </SafeAreaView>
  );
};
