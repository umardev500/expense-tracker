import {Input} from '@/components/ui/atoms';
import {Header, TransactionList} from '@/components/ui/organisms';
import {dummyTransactions} from '@/data';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Search = () => {
  const onSubmitEditing = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    console.log(e);
  };

  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView style={{flex: 1}}>
        <Header title="Search" />

        <View className="px-4">
          <Input
            onSubmitEditing={onSubmitEditing}
            size="lg"
            placeholder="Wifi fee..."
          />

          <View className="mt-6">
            <TransactionList data={dummyTransactions} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
