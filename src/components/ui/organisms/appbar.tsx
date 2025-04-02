import {
  HeaderAction,
  HeaderActions,
  HeaderBackAction,
  HeaderContent,
} from '@/components/ui/molecules';
import {View} from 'react-native';

type Props = {
  children?: React.ReactNode;
};

const Header = ({children}: Props) => {
  return (
    <View className="px-4">
      <View className="h-16 flex-row items-center">{children}</View>
    </View>
  );
};

export const AppBar = {
  Header,
  Content: HeaderContent,
  BackAction: HeaderBackAction,
  Actions: HeaderActions,
  Action: HeaderAction,
};
