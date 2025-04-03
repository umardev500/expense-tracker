import {ChartBarItem, ChartLineLabel} from '@/components/ui/molecules';
import {ScrollView, View} from 'react-native';

// const data = [
//   {
//     title: 'Sun',
//     value: {
//       income: Math.floor(Math.random() * 81),
//       expense: Math.floor(Math.random() * 81),
//     },
//   },
//   {
//     title: 'Mon',
//     value: {
//       income: Math.floor(Math.random() * 81),
//       expense: Math.floor(Math.random() * 81),
//     },
//   },
//   {
//     title: 'Tue',
//     value: {
//       income: Math.floor(Math.random() * 81),
//       expense: Math.floor(Math.random() * 81),
//     },
//   },
//   {
//     title: 'Wed',
//     value: {
//       income: Math.floor(Math.random() * 81),
//       expense: Math.floor(Math.random() * 81),
//     },
//   },
//   {
//     title: 'Thu',
//     value: {
//       income: Math.floor(Math.random() * 81),
//       expense: Math.floor(Math.random() * 81),
//     },
//   },
//   {
//     title: 'Fri',
//     value: {
//       income: Math.floor(Math.random() * 81),
//       expense: Math.floor(Math.random() * 81),
//     },
//   },
//   {
//     title: 'Sat',
//     value: {
//       income: Math.floor(Math.random() * 81),
//       expense: Math.floor(Math.random() * 81),
//     },
//   },
// ];

const data = [
  {
    title: 'Sun',
    value: {
      income: 68,
      expense: 30,
    },
  },
  {
    title: 'Mon',
    value: {
      income: 70,
      expense: 40,
    },
  },
  {
    title: 'Tue',
    value: {
      income: 80,
      expense: 20,
    },
  },
  {
    title: 'Wed',
    value: {
      income: 60,
      expense: 50,
    },
  },
  {
    title: 'Thu',
    value: {
      income: 40,
      expense: 60,
    },
  },
  {
    title: 'Fri',
    value: {
      income: 75,
      expense: 25,
    },
  },
  {
    title: 'Sat',
    value: {
      income: 85,
      expense: 80,
    },
  },
];

const maxValue = Math.max(
  ...data.map(item => Math.max(item.value.income, item.value.expense)),
);

const LABEL_SPACING = 4;
const TEXT_LABEL_HEIGHT = 20 + LABEL_SPACING;
const PADDING_VERTICALLY = 0;
const CHART_HEIGHT = 192 - PADDING_VERTICALLY - TEXT_LABEL_HEIGHT; // Bar chart max height

// Calculate the step size for the Y-axis labels
const STEP_COUNT = 5; // We are dividing the range into 5 steps

export const StatisticChart = () => {
  return (
    <View
      className="flex-row items-end w-full rounded-xl"
      style={{height: 192}}>
      <ChartLineLabel
        stepCount={STEP_COUNT}
        chartHeight={CHART_HEIGHT}
        paddingVertically={PADDING_VERTICALLY}
        maxValue={maxValue}
        disableLine
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="h-full flex-1 ml-10"
        contentContainerClassName="gap-4">
        {data.map(item => (
          <ChartBarItem
            key={item.title}
            title={item.title}
            value={item.value}
            maxValue={maxValue}
            chartHeight={CHART_HEIGHT}
            labelSpacing={LABEL_SPACING}
          />
        ))}
      </ScrollView>
    </View>
  );
};
