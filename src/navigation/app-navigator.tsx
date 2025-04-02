import {StackNavigator} from '@/navigation/stack-navigator';
import {NavigationContainer} from '@react-navigation/native';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
