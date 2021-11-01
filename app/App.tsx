import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import InputsOutputs from "./components/InputsOutputs";
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App() {

  const store = configureStore();
  const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <InputsOutputs></InputsOutputs>
      </View>
    </Provider>
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
