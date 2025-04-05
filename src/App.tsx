import {AppNavigator} from '@/navigation';
import {getApps} from '@react-native-firebase/app';
import {useEffect} from 'react';
import {View} from 'react-native';
import {SystemBars} from 'react-native-edge-to-edge';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import './global.css';

const App = () => {
  useEffect(() => {
    const isInitialized = getApps();
    console.log('🔥 Firebase initialized:', isInitialized);
  }, []);

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
