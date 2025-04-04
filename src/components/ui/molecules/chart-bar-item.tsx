import {Text, View} from 'react-native';

type Props = {
  title: string;
  value: {
    income: number;
    expense: number;
  };
  maxValue: number;
  chartHeight: number;
  labelSpacing?: number;
};

export const ChartBarItem = ({
  title,
  value,
  maxValue,
  chartHeight,
  labelSpacing = 0,
}: Props) => {
  // Scale heights proportionally
  const incomeHeight = (value.income / maxValue) * chartHeight;
  const expenseHeight = (value.expense / maxValue) * chartHeight;

  return (
    <View className="justify-end items-center">
      <View className="w-8 flex-row items-end justify-between">
        <View
          className="w-3.5 bg-lime-400 rounded-lg"
          style={{height: incomeHeight + 0.3}}
        />
        <View
          className="w-3.5 bg-red-500 rounded-lg"
          style={{height: expenseHeight + 0.3}}
        />
      </View>
      <View style={{height: labelSpacing}} />
      <Text className="text-white text-sm">{title}</Text>
    </View>
  );
};
