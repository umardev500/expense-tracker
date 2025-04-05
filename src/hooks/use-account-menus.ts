import {MenuItemProps} from '@/components/ui/molecules';
import {useAuth} from '@/hooks/useAuth';

export const useAccountMenus = (): MenuItemProps[] => {
  const {logout} = useAuth();

  return [
    {
      title: 'Edit Profile',
      iconBox: {
        icon: 'settings',
        filled: true,
        boxSize: 'lg',
        containerColor: '#16a34a',
      },
      onPress: () => {},
    },
    {
      title: 'Settings',
      iconBox: {
        icon: 'settings',
        filled: true,
        boxSize: 'lg',
        containerColor: '#3B82F6',
      },
      onPress: () => {},
    },
    {
      title: 'Privacy Policy',
      iconBox: {
        icon: 'low_priority',
        filled: true,
        boxSize: 'lg',
        containerColor: '#374151',
      },
      onPress: () => {},
    },
    {
      title: 'Logout',
      iconBox: {
        icon: 'settings_power',
        filled: true,
        boxSize: 'lg',
        containerColor: '#b91c1c',
      },
      onPress: logout,
    },
  ];
};
