import {Button, Input} from '@/components/ui/atoms';
import {ImageUploader} from '@/components/ui/molecules';
import {Header} from '@/components/ui/organisms';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const NewWallet = () => {
  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView style={{flex: 1}}>
        <Header title="New Wallet" />

        <View className="px-4 mt-6 gap-4 flex-1">
          <View className="gap-2">
            <Text className="text-white/80 text-base">Wallet Name</Text>
            <Input size="lg" placeholder="Enter wallet name" />
          </View>

          <View className="gap-2">
            <Text className="text-white/80 text-base">Icon</Text>
            <ImageUploader />
          </View>
        </View>

        <View className="border-t border-t-white/30 py-4 px-4">
          <Button
            text="Add Wallet"
            color="bg-lime-400"
            size="lg"
            fw="font-bold"
            fc="text-gray-800"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
