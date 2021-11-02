import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import InputsOutputs from "./components/InputsOutputs";
import { QueryClient, QueryClientProvider } from 'react-query'
import { theme, withGalio, GalioProvider } from 'galio-framework'
const customTheme = {
  SIZES: { BASE: 18, },
  // this will overwrite the Galio SIZES BASE value 16
  COLORS: { PRIMARY: 'red', }
  // this will overwrite the Galio COLORS PRIMARY color #B23AFC
};

export default function App() {

  // const store = configureStore();
  const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
    {/*<Provider store={store}>*/}
      <GalioProvider theme={customTheme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <InputsOutputs></InputsOutputs>
      </View>
      </GalioProvider>
    {/*</Provider>*/}
  </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
