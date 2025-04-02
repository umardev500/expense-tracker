import {Icon} from '@/components/custom-icon';
import {Spacer} from '@/components/spacer';
import {Transaction} from '@/types/transactions';
import {Text, View} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';

interface Props extends Transaction {
  delay: number;
}

export const TransactionCard = (props: Props) => {
  const {category, description, isExpense, amount, date} = props;
  const symbol = isExpense ? '-' : '+';

  return (
    <Animated.View
      entering={FadeInDown.delay(props.delay)}
      className="flex-row justify-between items-center py-2.5 px-4 rounded-2xl bg-white/10">
      <View className="flex-row items-center gap-3">
        <View
          className={'w-12 h-12 rounded-2xl items-center justify-center'}
          style={{backgroundColor: category.iconContainerColor}}>
          <Icon
            fill={category.fill}
            name={category.icon}
            size={24}
            color={category.iconColor}
          />
          <Spacer className="mb-[2px]" />
        </View>
        <View>
          <Text className="text-white text-lg">{category.name}</Text>
          <Text className="text-white/50 text-sm">{description}</Text>
        </View>
      </View>
      <View>
        <Text
          className={`${
            !isExpense ? 'text-green-700' : 'text-orange-700'
          } text-xl font-medium text-right`}>
          {symbol} ${amount}
        </Text>
        <Text className="text-white/50 text-sm text-right">{date}</Text>
      </View>
    </Animated.View>
  );
};
