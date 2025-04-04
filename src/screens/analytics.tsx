import {Spacer} from '@/components/spacer';
import {TransactionCard} from '@/components/ui/molecules';
import {StatisticChart, Tabs} from '@/components/ui/organisms';
import {
  dummyTransactions,
  monthlyChartData,
  weeklyChartData,
  yearlyChartData,
} from '@/data';
import {Chart} from '@/types';
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
            <Tabs spacingX={16} labels={['Weekly', 'Monthly', 'Yearly']}>
              {i => {
                var data: Chart[];
                switch (i) {
                  case 1:
                    data = monthlyChartData;
                    break;
                  case 2:
                    data = yearlyChartData;
                    break;
                  default:
                    data = weeklyChartData;
                    break;
                }

                return (
                  <View className="py-6">
                    <StatisticChart activeTab={i} data={data} />
                  </View>
                );
              }}
            </Tabs>

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
