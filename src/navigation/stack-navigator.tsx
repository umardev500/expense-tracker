import {Loading} from '@/components/ui/atoms';
import {BottomTab} from '@/navigation/bottom-tab';
import {AddTransaction, Login, NewWallet} from '@/screens';
import {Search} from '@/screens/search';
import {RootStackParamList} from '@/types';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {View} from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<null | FirebaseAuthTypes.User>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(curr => {
      setUser(curr);
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [initializing]);

  const isSignedIn = !!user;

  if (initializing) {
    return (
      <View className="flex-1 items-center justify-center">
        <Loading />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={isSignedIn ? 'Main' : 'Login'}
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      {/* Auth screen */}
      {!isSignedIn ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          {/* Main app */}
          <Stack.Screen name="Main" component={BottomTab} />
          <Stack.Screen name="AddTransaction" component={AddTransaction} />
          <Stack.Screen name="NewWallet" component={NewWallet} />
          <Stack.Screen name="Search" component={Search} />
        </>
      )}
    </Stack.Navigator>
  );
};
