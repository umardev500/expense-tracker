import image from '@/assets/images/card-joined.png';
import {Icon} from '@/components/custom-icon';
import {TransactionCategory, TransactionProps} from '@/components/ui/molecules';
import {TransactionList} from '@/components/ui/organisms';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
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
            <Text className="text-white/60 text-xl">Hello,</Text>
            <Text className="text-white text-2xl">Steven Jhon</Text>
          </View>
          <View className="bg-white/20 rounded-full w-11 h-11 items-center justify-center">
            <TouchableOpacity>
              <Icon name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Card */}
        <View className="mt-6 mb-4">
          <ImageBackground
            source={image}
            className="w-full h-[218px]"
            resizeMode="stretch">
            <View className="p-6 h-[189px] justify-between">
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-xl font-medium text-gray-800">
                    Total Balance
                  </Text>
                  <Icon name="more_horiz" size={24} color="black" />
                </View>
                <Text className="mt-2 text-4xl font-bold text-gray-800">
                  $ 334.00
                </Text>
              </View>

              <View className="flex-row items-center justify-between">
                <View className="gap-1">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 rounded-full items-center justify-center bg-gray-200">
                      <Icon name="arrow_upward" size={18} color="black" />
                    </View>
                    <Text className="text-gray-600 text-lg font-medium">
                      Income
                    </Text>
                  </View>
                  <Text className="text-green-600 font-bold text-2xl">
                    $ 2164.00
                  </Text>
                </View>
                <View className="gap-1">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 rounded-full items-center justify-center bg-gray-200">
                      <Icon name="arrow_downward" size={18} color="black" />
                    </View>
                    <Text className="text-gray-600 text-lg font-medium">
                      Expense
                    </Text>
                  </View>
                  <Text className="text-orange-600 font-bold text-2xl">
                    $ 1830.00
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
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
