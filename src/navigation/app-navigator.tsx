import {StackNavigator} from '@/navigation/stack-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {memo} from 'react';

export const AppNavigator = memo(() => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
});
