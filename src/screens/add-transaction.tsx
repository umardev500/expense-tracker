import {Header} from '@/components/ui/organisms';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const AddTransaction = () => {
  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView>
        <Header
          title="Add Transaction"
          actions={[
            {
              icon: 'more_vert',
              onPress: () => {},
            },
          ]}
        />
      </SafeAreaView>
    </View>
  );
};
