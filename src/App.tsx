import {Home} from '@/screens/home';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {SystemBars} from 'react-native-edge-to-edge';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import './global.css';

const App = () => {
  return (
    <>
      <SystemBars style={'light'} />
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
