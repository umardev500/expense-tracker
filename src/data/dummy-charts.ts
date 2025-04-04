// Helpers
const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// WEEKLY
export const weeklyChartData = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
].map(title => ({
  title,
  value: {
    income: getRandom(50, 150),
    expense: getRandom(20, 100),
  },
}));

// MONTHLY
export const monthlyChartData = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
].map(title => ({
  title,
  value: {
    income: getRandom(1200, 2000),
    expense: getRandom(700, 1200),
  },
}));

// YEARLY
export const yearlyChartData = Array.from({length: 22}, (_, i) => {
  const year = 2002 + i;
  return {
    title: year.toString(),
    value: {
      income: getRandom(15000, 50000),
      expense: getRandom(8000, 30000),
    },
  };
});
