import {TransactionCard, TransactionProps} from '@/components/ui/molecules';
import {useCallback} from 'react';
import {FlatList, View} from 'react-native';

type Props = {
  data: TransactionProps[];
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
