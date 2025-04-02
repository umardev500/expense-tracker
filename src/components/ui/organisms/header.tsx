import {IconName} from '@/components/custom-icon';
import {AppBar} from '@/components/ui/organisms/appbar';

type Props = {
  title: string;
  actions?: {
    icon: IconName;
    onPress: () => void;
  }[];
};

export const Header = ({title, actions}: Props) => {
  return (
    <>
      <AppBar.Header>
        <AppBar.BackAction />
        <AppBar.Content title={title} />
        <AppBar.Actions>
          {actions?.map((action, index) => (
            <AppBar.Action
              key={index}
              icon={action.icon}
              onPress={action.onPress}
            />
          ))}
        </AppBar.Actions>
      </AppBar.Header>
    </>
  );
};
