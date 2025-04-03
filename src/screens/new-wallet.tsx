import {Icon} from '@/components/custom-icon';
import {Button, Input} from '@/components/ui/atoms';
import {ImageUploader} from '@/components/ui/molecules';
import {Header} from '@/components/ui/organisms';
import {RootStackParamList} from '@/types';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = StackScreenProps<RootStackParamList, 'NewWallet'>;

export const NewWallet = ({route}: Props) => {
  const {params} = route;
  const title = params?.name ? 'Edit Wallet' : 'New Wallet';

  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView style={{flex: 1}}>
        <Header title={title} />

        <View className="px-4 mt-6 gap-4 flex-1">
          <View className="gap-2">
            <Text className="text-white/80 text-base">Wallet Name</Text>
            <Input
              size="lg"
              placeholder="Enter wallet name"
              value={params?.name}
            />
          </View>

          <View className="gap-2">
            <Text className="text-white/80 text-base">Icon</Text>
            <ImageUploader />
          </View>
        </View>

        <View className="border-t gap-2 border-t-white/30 py-4 px-4 flex-row">
          {params?.name && (
            <Button color="#ef4444" size="lg" corderRadius={18}>
              <Icon name="toll" size={24} color="white" />
            </Button>
          )}
          <Button
            className="flex-1"
            color="#a3e635"
            size="lg"
            corderRadius={18}>
            <Text className="text-black text-xl font-medium">Add Wallet</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};
