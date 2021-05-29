import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './Containers/Header'
import Todoitem from './Containers/todoitemp'
import AddTodo from './Containers/Addtodo'


export default function App() {
  const [todos, settodos] = useState([
    {Text: 'buy coffee', key: '1'},
    {Text: 'buy tea', key: '2'},
    {Text: 'buy cold drink', key: '3'}
  ]);

  const presshandler = (key) => {
    settodos((prevTodos) => {
      return prevTodos.filter(todos => todos.key != key);
    });

  }

  const submmithadler = (text) => {
    if(text.length < 32){
    settodos((prevTodos) => {
      return [
        {
          Text: text, 
          key: Math.random().toString()
        },
        ...prevTodos
      ]
    })
  }
  else{
    Alert.alert('OOps!!', 'Slow it down bro..title must not exceed 32 char', [{text: 'OK'}])
  }
}

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
        <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submithandler={submmithadler}/>
          <View style={styles.list}>
            <FlatList
              data = {todos}
              renderItem={({ item }) => (
                <Todoitem item = {item} presshandler={presshandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
