import {Spacer} from '@/components/spacer';
import {Button, Input} from '@/components/ui/atoms';
import {Header} from '@/components/ui/organisms';
import {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const AddTransaction = () => {
  const [isExpense, setIsExpense] = useState(false);

  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView style={{flex: 1}}>
        <Header
          title="Add Transaction"
          actions={[
            {
              icon: 'more_vert',
              onPress: () => {},
            },
          ]}
        />

        <Spacer className="h-6" />

        <ScrollView>
          <View className="px-4 gap-4">
            <View className="gap-2">
              <Text className="text-white/80 text-base">Type</Text>
              <Input
                onPress={() => {
                  setIsExpense(!isExpense);
                }}
                editable={false}
                trailingIconName="chevron_right"
                trailingIconSize={25}
                iconColor="rgba(255,255,255,0.8)"
                isIconFill
                size="lg"
                placeholder="Transaction type"
                value="Expense"
              />
            </View>
            <View className="gap-2">
              <Text className="text-white/80 text-base">Wallet</Text>
              <Input
                onPress={() => {}}
                editable={false}
                trailingIconName="chevron_right"
                trailingIconSize={25}
                iconColor="rgba(255,255,255,0.8)"
                isIconFill
                size="lg"
                placeholder="Select item"
              />
            </View>
            {isExpense && (
              <View className="gap-2">
                <Text className="text-white/80 text-base">
                  Expense Category
                </Text>
                <Input
                  onPress={() => {}}
                  editable={false}
                  trailingIconName="chevron_right"
                  trailingIconSize={25}
                  iconColor="rgba(255,255,255,0.8)"
                  isIconFill
                  size="lg"
                  placeholder="Select item"
                />
              </View>
            )}
            <View className="gap-2">
              <Text className="text-white/80 text-base">Date</Text>
              <Input
                size="lg"
                keyboardType="number-pad"
                value="02/04/2025"
                editable={false}
                onPress={() => {}}
              />
            </View>
            <View className="gap-2">
              <Text className="text-white/80 text-base">Amount</Text>
              <Input size="lg" keyboardType="number-pad" placeholder="0" />
            </View>
            <View className="gap-2">
              <Text className="text-white/80 text-base">
                Description <Text className="text-white/50">(recommended)</Text>
              </Text>
              <Input
                size="lg"
                keyboardType="number-pad"
                placeholder="The descriptions of the transaction"
              />
            </View>
          </View>
        </ScrollView>

        <View className="border-t border-t-white/50 mt-4 py-4 px-4">
          <Button
            text="Submit"
            color="bg-lime-400"
            size="lg"
            fw="font-bold"
            fc="text-gray-800"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
