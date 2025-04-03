export type RootStackParamList = {
  Main: undefined;
  AddTransaction: undefined;
  Login: undefined;
  NewWallet: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
