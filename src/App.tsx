import {Home} from '@/screens/home';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import './global.css';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <GestureHandlerRootView>
        <NavigationContainer theme={DarkTheme}>
          <View className="flex-1 bg-darkbg">
            <Home />
          </View>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
