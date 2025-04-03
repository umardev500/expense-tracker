import loading from '@/assets/anim/loading-com.json';
import image from '@/assets/images/card-joined.png';
import {Icon} from '@/components/custom-icon';
import {Fab} from '@/components/ui/atoms';
import {TransactionCard} from '@/components/ui/molecules';
import {Transaction} from '@/types/transactions';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Home = () => {
  const [loadingTrx, setLoadingTrx] = useState(true);
  const navigation = useNavigation();

  const transactions: Transaction[] = [
    {
      id: '1',
      category: {
        name: 'Health',
        fill: true,
        icon: 'favorite',
        iconColor: 'white',
        iconContainerColor: '#dc2626',
      },
      description: 'Checkup fee',
      isExpense: true,
      amount: 30,
      date: '26 Nov',
    },
    {
      id: '2',
      category: {
        name: 'Income',
        fill: true,
        icon: 'paid',
        iconColor: 'white',
        iconContainerColor: '#15803d',
      },
      description: 'Random money',
      isExpense: false,
      amount: 50,
      date: '26 Nov',
    },
    {
      id: '3',
      category: {
        name: 'Utilities',
        fill: true,
        icon: 'electrical_services',
        iconColor: 'white',
        iconContainerColor: '#f97316',
      },
      description: 'Electricity bill',
      isExpense: true,
      amount: 120,
      date: '26 Nov',
    },
    {
      id: '4',
      category: {
        name: 'Dining',
        fill: true,
        icon: 'restaurant',
        iconColor: 'white',
        iconContainerColor: '#be185d',
      },
      description: 'Had dinner at hotel',
      isExpense: false,
      amount: 18,
      date: '27 Nov',
    },
    {
      id: '5',
      category: {
        name: 'Clothing',
        fill: true,
        icon: 'apparel',
        iconColor: 'white',
        iconContainerColor: '#7e22ce',
      },
      description: 'Winter coat',
      isExpense: false,
      amount: 10,
      date: '27 Nov',
    },
    {
      id: '6',
      category: {
        name: 'Cleaning',
        fill: true,
        icon: 'local_laundry_service',
        iconColor: 'white',
        iconContainerColor: '#2563eb',
      },
      description: 'Laundry service',
      isExpense: false,
      amount: 10,
      date: '27 Nov',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoadingTrx(false);
    }, 1500);
  }, []);

  const {top} = useSafeAreaInsets();

  return (
    <View className="flex-1 px-4 bg-darkbg" style={{paddingTop: top}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center pb-2 pt-4">
          <View>
            <Text className="text-white/60 text-lg">Hello,</Text>
            <Text className="text-white text-xl">Umar Sinclair</Text>
          </View>
          <View className="bg-white/20 rounded-full w-11 h-11 items-center justify-center">
            <TouchableOpacity>
              <Icon name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Card */}
        <View className="mt-6 mb-4">
          <ImageBackground
            source={image}
            className="w-full h-[218px]"
            resizeMode="stretch">
            <View className="px-6 py-5 h-[189px] justify-between">
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-medium text-gray-800">
                    Total Balance
                  </Text>
                  <Icon name="more_horiz" size={24} color="black" />
                </View>
                <Text className="mt-1 text-3xl font-bold text-gray-800">
                  $ {loadingTrx ? '----' : '334.00'}
                </Text>
              </View>

              <View className="flex-row items-center justify-between">
                <View className="gap-1">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 rounded-full items-center justify-center bg-gray-200">
                      <Icon name="arrow_upward" size={18} color="black" />
                    </View>
                    <Text className="text-gray-600 text-base font-medium">
                      Income
                    </Text>
                  </View>
                  <Text className="text-green-600 font-bold text-xl text-center">
                    $ {loadingTrx ? '----' : '2164.00'}
                  </Text>
                </View>
                <View className="gap-1">
                  <View className="flex-row items-center gap-2">
                    <View className="w-8 h-8 rounded-full items-center justify-center bg-gray-200">
                      <Icon name="arrow_downward" size={18} color="black" />
                    </View>
                    <Text className="text-gray-600 text-base font-medium">
                      Expense
                    </Text>
                  </View>
                  <Text className="text-orange-600 font-bold text-xl text-center">
                    $ {loadingTrx ? '----' : '1830.00'}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Recent transactions */}
        <View className="gap-4 mt-6 pb-4">
          <Text className="text-white text-xl">Recent transactions</Text>
          {loadingTrx ? (
            <View className="items-center justify-center h-64">
              <LottieView
                source={loading}
                autoPlay
                loop
                style={{width: 35, height: 35}}
              />
            </View>
          ) : (
            transactions.map((transaction, index) => (
              <TransactionCard
                delay={index * 100}
                key={transaction.id}
                {...transaction}
              />
            ))
          )}
        </View>
      </ScrollView>
      <Fab
        onPress={() => {
          navigation.navigate('AddTransaction');
        }}
      />
    </View>
  );
};
