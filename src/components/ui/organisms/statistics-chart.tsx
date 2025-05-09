import {ChartBarItem, ChartLineLabel} from '@/components/ui/molecules';
import {Chart} from '@/types';
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

const LABEL_SPACING = 4;
const TEXT_LABEL_HEIGHT = 20 + LABEL_SPACING;
const PADDING_VERTICALLY = 0;
const CHART_HEIGHT = 192 - PADDING_VERTICALLY - TEXT_LABEL_HEIGHT; // Bar chart max height

// Calculate the step size for the Y-axis labels
const STEP_COUNT = 5; // We are dividing the range into 5 steps

type Props = {
  activeTab: number;
  data: Chart[];
};

export const StatisticChart = ({data}: Props) => {
  // TODO: get chart data baseon active tab
  const maxValue = Math.max(
    ...data.map(item => Math.max(item.value.income, item.value.expense)),
  );

  return (
    <View
      className="flex-row items-end w-full rounded-xl"
      style={{height: 192}}>
      <ChartLineLabel
        stepCount={STEP_COUNT}
        chartHeight={CHART_HEIGHT}
        paddingVertically={PADDING_VERTICALLY}
        maxValue={maxValue}
        disableLine={false}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="h-full flex-1"
        contentContainerClassName="gap-3 px-2">
        {data.map((item, index) => (
          <ChartBarItem
            key={item.title}
            title={item.title}
            value={item.value}
            maxValue={maxValue}
            chartHeight={CHART_HEIGHT}
            labelSpacing={LABEL_SPACING}
            delay={index * 100}
          />
        ))}
      </ScrollView>
    </View>
  );
};
