import {MotiView} from 'moti';
import {Text, View} from 'react-native';
import {Easing} from 'react-native-reanimated';

type Props = {
  title: string;
  value: {
    income: number;
    expense: number;
  };
  maxValue: number;
  chartHeight: number;
  labelSpacing?: number;
  delay?: number;
  duration?: number;
};

export const ChartBarItem = ({
  title,
  value,
  maxValue,
  chartHeight,
  labelSpacing = 0,
  delay = 0,
  duration = 500,
}: Props) => {
  // Scale heights proportionally
  const incomeHeight = (value.income / maxValue) * chartHeight;
  const expenseHeight = (value.expense / maxValue) * chartHeight;

  return (
    <View className="justify-end items-center">
      <View className="w-8 flex-row items-end justify-between">
        <MotiView
          className="w-3.5 bg-lime-400 rounded-lg"
          from={{height: 0}}
          animate={{height: incomeHeight}}
          transition={{
            type: 'timing',
            duration,
            delay,
            easing: Easing.out(Easing.ease),
          }}
        />
        <MotiView
          className="w-3.5 bg-red-500 rounded-lg"
          from={{height: 0}}
          animate={{height: expenseHeight}}
          transition={{
            type: 'timing',
            delay: delay * 2,
            duration,
            easing: Easing.out(Easing.ease),
          }}
        />
      </View>
      <View style={{height: labelSpacing}} />
      <Text className="text-white text-sm">{title}</Text>
    </View>
  );
};
