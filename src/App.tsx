import {Login} from '@/screens/login';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import './global.css';

const App = () => {
  return (
    <>
      <GestureHandlerRootView>
        <NavigationContainer theme={DarkTheme}>
          <Login />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
