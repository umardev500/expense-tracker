import {Text, View} from 'react-native';

type Props = {
  title: string;
};

export const HeaderContent = ({title}: Props) => {
  return (
    <View className="flex-1">
      <Text className="text-white text-2xl">{title}</Text>
    </View>
  );
};
