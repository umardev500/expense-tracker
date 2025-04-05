import {BottomTab} from '@/navigation/bottom-tab';
import {AddTransaction, Login, NewWallet} from '@/screens';
import {Search} from '@/screens/search';
import {RootStackParamList} from '@/types';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
      <Stack.Screen name="Main" component={BottomTab} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
      <Stack.Screen name="NewWallet" component={NewWallet} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
