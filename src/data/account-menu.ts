import {MenuItemProps} from '@/components/ui/molecules';

export const accountMenus: MenuItemProps[] = [
  {
    title: 'Edit Profile',
    iconBox: {
      icon: 'settings',
      filled: true,
      boxSize: 'lg',
      containerColor: '#16a34a',
    },
    onPress: () => console.log('Go to Profile'),
  },
  {
    title: 'Settings',
    iconBox: {
      icon: 'settings',
      filled: true,
      boxSize: 'lg',
      containerColor: '#3B82F6',
    },
    onPress: () => console.log('Go to Profile'),
  },
  {
    title: 'Privacy Policy',
    iconBox: {
      icon: 'low_priority',
      filled: true,
      boxSize: 'lg',
      containerColor: '#374151',
    },
    onPress: () => console.log('Go to Profile'),
  },
  {
    title: 'Logout',
    iconBox: {
      icon: 'settings_power',
      filled: true,
      boxSize: 'lg',
      containerColor: '#b91c1c',
    },
    onPress: () => console.log('Go to Profile'),
  },
];
