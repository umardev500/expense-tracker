export type RootStackParamList = {
  Main: undefined;
  AddTransaction: undefined;
  Login: undefined;
  NewWallet: {
    name?: string;
    uri?: string;
  };
  Search: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
