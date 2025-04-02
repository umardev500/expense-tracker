import {AddTransaction, Home, Login} from '@/screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false,
      }}>
      {/* Auth screen */}
      <Stack.Screen name="Login" component={Login} />

      {/* Main app */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
    </Stack.Navigator>
  );
};
