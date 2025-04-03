export type RootStackParamList = {
  Main: undefined;
  AddTransaction: undefined;
  Login: undefined;
  NewWallet: {
    name?: string;
    uri?: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
