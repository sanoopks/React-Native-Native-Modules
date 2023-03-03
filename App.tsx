/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Math from './Math';

const App = () => {
  const [example, setExample] = useState('');
  const [title, setTitle] = useState('Examples');

  const showExample = (module: string) => {
    setExample(module);
    setTitle(module);
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Text style={styles.head}>{title}</Text>
      {example == 'Math Module' ? (
        <Math />
      ) : (
        <>
          <View style={styles.btn}>
            <Button
              title="Math Module"
              onPress={() => {
                showExample('Math Module');
              }}
            />
          </View>
        </>
      )}
      <View style={styles.close}>
        <Button title="Close" onPress={() => showExample('Examples')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  head: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  btn: {marginVertical: 5},
  close: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
export default App;
