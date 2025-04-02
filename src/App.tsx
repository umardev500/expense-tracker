import {AppNavigator} from '@/navigation';
import {View} from 'react-native';
import {SystemBars} from 'react-native-edge-to-edge';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import './global.css';

const App = () => {
  return (
    <>
      <SystemBars style={'light'} />
      <GestureHandlerRootView>
        <View className="flex-1 bg-darkbg">
          <KeyboardProvider>
            <AppNavigator />
          </KeyboardProvider>
        </View>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
