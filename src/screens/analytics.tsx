import {Spacer} from '@/components/spacer';
import {StatisticChart, TransactionList} from '@/components/ui/organisms';
import {dummyTransactions} from '@/data';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Analytics = () => {
  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView style={{flex: 1}}>
        <View className="px-4">
          <View className="flex-row justify-center items-center h-16">
            <Text className="text-white text-2xl">Statistics</Text>
          </View>

          <View className="py-4">
            <StatisticChart />
          </View>

          <View className="mt-6">
            <Text className="text-white text-xl">Transactions</Text>
            <Spacer className="h-4" />
            <TransactionList data={dummyTransactions} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
