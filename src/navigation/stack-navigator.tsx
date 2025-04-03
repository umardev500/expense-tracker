import {BottomTab} from '@/navigation/bottom-tab';
import {AddTransaction, Login} from '@/screens';
import {RootStackParamList} from '@/types';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      {/* Auth screen */}
      <Stack.Screen name="Login" component={Login} />

      {/* Main app */}
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
    </Stack.Navigator>
  );
};
