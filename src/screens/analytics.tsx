import {Spacer} from '@/components/spacer';
import {TransactionCard} from '@/components/ui/molecules';
import {StatisticChart} from '@/components/ui/organisms';
import {dummyTransactions} from '@/data';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Analytics = () => {
  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView style={{flex: 1}}>
        <View className="px-4">
          <View className="flex-row justify-center items-center h-16">
            <Text className="text-white text-2xl">Statistics</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex-row overflow-hidden bg-white/15 rounded-xl h-10 w-full mt-2 mb-4">
              <View className="flex-1 bg-white rounded-xl overflow-hidden items-center justify-center">
                <Text className="text-black text-base font-medium">Weekly</Text>
              </View>
              <View className="flex-1 items-center justify-center">
                <Text className="text-white text-base font-medium">
                  Monthly
                </Text>
              </View>
              <View className="flex-1 items-center justify-center">
                <Text className="text-white text-base font-medium">Yearly</Text>
              </View>
            </View>

            <View className="py-4">
              <StatisticChart />
            </View>

            <View className="mt-6">
              <Text className="text-white text-xl">Transactions</Text>
              <Spacer className="h-4" />
              {dummyTransactions.map((transaction, index) => (
                <View key={transaction.id}>
                  <TransactionCard
                    delay={index * 100}
                    key={transaction.id}
                    {...transaction}
                  />
                  <Spacer className="h-4" />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};
