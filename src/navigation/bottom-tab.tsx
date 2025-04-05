import {Icon, IconName} from '@/components/custom-icon';
import {Account, Analytics, Home, Wallets} from '@/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
  name: IconName;
};

const TabIcon = ({focused, color, size, name}: TabIconProps) => {
  return <Icon fill={focused} name={name} size={size} color={color} />;
};

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
        tabBarActiveTintColor: '#84cc16',
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderColor: 'rgba(255,255,255,0.4)',
        },
        tabBarItemStyle: {},
        tabBarIconStyle: {
          marginBottom: 2,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 15,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarIcon: props => {
            return TabIcon({...props, name: 'home'});
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Analytics',
          tabBarIcon: props => {
            return TabIcon({...props, name: 'show_chart'});
          },
        }}
        name="Analytics"
        component={Analytics}
      />
      <Tab.Screen
        options={{
          title: 'Wallets',
          tabBarIcon: props => {
            return TabIcon({...props, name: 'style'});
          },
        }}
        name="Wallets"
        component={Wallets}
      />
      <Tab.Screen
        options={{
          title: 'Account',
          tabBarIcon: props => {
            return TabIcon({...props, name: 'settings'});
          },
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};
