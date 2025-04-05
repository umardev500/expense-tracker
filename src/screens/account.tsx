import {MenuItem} from '@/components/ui/molecules';
import {useAccountMenus} from '@/hooks';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Account = () => {
  const menus = useAccountMenus();

  return (
    <View className="flex-1 bg-darkbg">
      <SafeAreaView style={{flex: 1}}>
        <View className="px-4">
          <View className="flex-row justify-center items-center h-16">
            <Text className="text-white text-xl">Account</Text>
          </View>

          <View className="py-4">
            <View className="items-center gap-2">
              <Image
                source={require('@/assets/images/avatar/avatar-2.png')}
                className="w-24 h-24 rounded-full"
              />

              <View className="items-center">
                <Text className="text-white text-2xl">Umar Sinclair</Text>
                <Text className="text-white/60">umar@gmail.com</Text>
              </View>
            </View>

            <View className="mt-12">
              <View className="gap-5">
                {menus.map((menu, index) => (
                  <MenuItem
                    key={index}
                    title={menu.title}
                    iconBox={{
                      icon: menu.iconBox?.icon || 'add',
                      filled: true,
                      boxSize: menu.iconBox?.boxSize,
                      containerColor: menu.iconBox?.containerColor,
                    }}
                    onPress={menu.onPress}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
