import {ImageSourcePropType} from 'react-native';

export type Wallet = {
  name: string;
  amount: number;
  source?: ImageSourcePropType;
};
