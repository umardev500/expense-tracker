import {AppBar} from '@/components/ui/organisms';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const AddTransaction = () => {
  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView>
        <AppBar.Header>
          <AppBar.BackAction />
          <AppBar.Content title="Add Transaction" />
          <AppBar.Actions>
            <AppBar.Action icon="more_vert" onPress={() => {}} />
          </AppBar.Actions>
        </AppBar.Header>
      </SafeAreaView>
    </View>
  );
};
