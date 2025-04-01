import {Icon, IconName} from '@/components/custom-icon';
import {Spacer} from '@/components/spacer';
import {Text, View} from 'react-native';

export enum TransactionCategory {
  INCOME = 'income',
  EXPENSE = 'expense',
}

const getTransactionIcon = (category: TransactionCategory): IconName => {
  switch (category) {
    case TransactionCategory.INCOME:
      return 'attach_money';
    case TransactionCategory.EXPENSE:
      return 'trending_up';
  }
};

type Props = {
  category: TransactionCategory;
  description: string;
  inOrOut: 'in' | 'out';
  amount: number;
  date: string;
  iconContainerClassName?: string;
};

export type TransactionProps = {
  id: string;
  data: Props;
};

export const TransactionCard = ({data}: TransactionProps) => {
  const {category, description, inOrOut, amount, date, iconContainerClassName} =
    data;
  const symbol = inOrOut === 'in' ? '+' : '-';
  const icon = getTransactionIcon(category);

  return (
    <View className="flex-row justify-between items-center py-2.5 px-4 rounded-2xl bg-white/10">
      <View className="flex-row items-center gap-3">
        <View
          className={`${iconContainerClassName} w-12 h-12 rounded-2xl items-center justify-center`}>
          <Icon name={icon} size={24} color="white" />
          <Spacer className="mb-[2px]" />
        </View>
        <View>
          <Text className="text-white text-xl">{category}</Text>
          <Text className="text-white/50 text-base">{description}</Text>
        </View>
      </View>
      <View>
        <Text
          className={`${
            inOrOut === 'in' ? 'text-green-700' : 'text-orange-700'
          } text-2xl font-medium text-right`}>
          {symbol} ${amount}
        </Text>
        <Text className="text-white/50 text-base text-right">{date}</Text>
      </View>
    </View>
  );
};
