export type RootStackParamList = {
  Home: undefined;
  AddTransaction: undefined;
  Login: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
