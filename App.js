import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Containers/Header'

export default function App() {
  const [todos, settodos] = useState([
    {Text: 'buy coffee', key: '1'},
    {Text: 'buy tea', key: '2'},
    {Text: 'buy cold drink', key: '3'}
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data = {todos}
            renderItem={({ item }) => (
              <Text>{item.Text}</Text>
            )}
          />
        </View>
      </View>
      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
