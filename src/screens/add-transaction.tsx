import {Spacer} from '@/components/spacer';
import {Button, Input} from '@/components/ui/atoms';
import {Header} from '@/components/ui/organisms';
import {useState} from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
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

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          bottomOffset={54}
          style={{flex: 1}}>
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
        </KeyboardAwareScrollView>

        <View className="border-t border-t-white/50 py-4 px-4">
          <Button color="#a3e635" size="lg" corderRadius={18}>
            <Text className="text-black text-xl font-medium">Submit</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};
