import {WalletItem} from '@/components/ui/molecules';
import {Wallet} from '@/types';
import {ScrollView} from 'react-native';

type Props = {
  data: Wallet[];
};

export const WalletList = ({data}: Props) => {
  return (
    <ScrollView contentContainerClassName="gap-6">
      {data.map(wallet => (
        <WalletItem
          key={wallet.name}
          name={wallet.name}
          amount={wallet.amount}
          source={wallet.source}
        />
      ))}
    </ScrollView>
  );
};
