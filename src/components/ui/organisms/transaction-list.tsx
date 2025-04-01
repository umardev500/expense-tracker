import {TransactionCard} from '@/components/ui/molecules';
import {Transaction} from '@/types/transactions';
import {useCallback} from 'react';
import {FlatList, View} from 'react-native';

type Props = {
  data: Transaction[];
};

export const TransactionList = ({data}: Props) => {
  const Separator = useCallback(() => <View className="h-4" />, []);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <TransactionCard {...item} />}
      ItemSeparatorComponent={Separator}
    />
  );
};
