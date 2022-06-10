import React, { FC, ReactElement } from 'react';
import {styles} from './styles';

// native Components
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

// COMPONENTS
import EntryApp from './EntryApp';

const App: FC = (): ReactElement => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <EntryApp />
    </SafeAreaView>
  );
}

export default App;