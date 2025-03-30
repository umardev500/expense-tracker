import {Icon} from '@/components/custom-icon';
import {Button, Input} from '@/components/ui/atoms';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Login = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <SafeAreaView className="flex-1 bg-gray-900">
        <ScrollView className="flex-1">
          <View className="p-4 bg-gray-900 flex-1">
            <TouchableOpacity
              onPress={() => {}}
              className="bg-gray-600 w-10 h-10 rounded-lg items-center justify-center">
              <Icon name="chevron_left" size={24} color="white" />
            </TouchableOpacity>

            <View className="gap-1 mt-12">
              <Text className="text-4xl font-bold text-white">Hey,</Text>
              <Text className="text-4xl font-bold text-white">
                Welcome Back
              </Text>
            </View>

            <View className="mt-6 gap-3">
              <Text className="text-base text-gray-400">
                Login now to track all your expenses
              </Text>

              <View className="gap-4">
                <Input
                  size="lg"
                  placeholder="Type your email"
                  leadingIcon={
                    <Icon name="email_alternate" size={22} color="white" />
                  }
                />
                <Input
                  size="lg"
                  placeholder="Enter password"
                  leadingIcon={<Icon name="lock" size={22} color="white" />}
                />
              </View>
            </View>

            <View className="flex-row justify-end py-4">
              <TouchableOpacity
                className="flex-row inline-flex"
                onPress={() => {}}>
                <Text className="text-gray-400">Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View className="gap-5 items-center">
              <Button size="lg" fw="font-bold" fc="text-gray-800" />

              <View className="flex-row gap-1">
                <Text className="text-base text-gray-400">
                  Dont't have an account?
                </Text>
                <TouchableWithoutFeedback>
                  <Text className="text-base text-lime-500 font-semibold">
                    Sign up
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
