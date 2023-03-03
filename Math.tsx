import React, {useState} from 'react';
import {
  NativeModules,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

function Math() {
  const [a, setA] = useState<any>(null);
  const [b, setB] = useState<any>(null);
  const [result, setResult] = useState('');
  const {MathModule} = NativeModules;

  const add = async () => {
    if (a && b) {
      const result = await MathModule.add(a, b);
      setResult(result);
    }
  };

  const subtract = async () => {
    if (a && b) {
      const result = await MathModule.subtract(a, b);
      setResult(result);
    }
  };

  const multiply = async () => {
    if (a && b) {
      const result = await MathModule.multiply(a, b);
      setResult(result);
    }
  };

  const divide = async () => {
    if (a && b) {
      const result = await MathModule.divide(a, b);
      setResult(result);
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{}}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Result: {result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter first number"
          onChangeText={value => setA(Number(value))}
          value={a !== null ? a.toString() : ''}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter second number"
          onChangeText={value => setB(Number(value))}
          value={b !== null ? b.toString() : ''}
          style={styles.input}
        />
        <View style={styles.actionsContainer}>
          <View style={[styles.flexRow, styles.hSpaceAround]}>
            <TouchableHighlight style={styles.action} onPress={add}>
              <Text style={[styles.actionText]}>+</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.action} onPress={subtract}>
              <Text style={styles.actionText}>-</Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.flexRow, styles.hSpaceAround]}>
            <TouchableHighlight style={styles.action} onPress={multiply}>
              <Text style={styles.actionText}>*</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.action} onPress={divide}>
              <Text
                style={[
                  styles.actionText,
                  {
                    fontSize: 22,
                  },
                ]}>
                /
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  hSpaceAround: {
    justifyContent: 'space-around',
  },
  hStack: {
    justifyContent: 'space-between',
  },
  resultContainer: {
    height: 200,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: 'orange',
  },
  resultText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  inputContainer: {flex: 1, marginVertical: 20},
  actionsContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  action: {
    paddingVertical: 5,
    width: '45%',
    height: 80,
    backgroundColor: '#1665a0',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  actionText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Math;
