import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Todoitem({ item, presshandler }) {
    return (
        <TouchableOpacity onPress={() => presshandler(item.key) }>  
            <Text style= {styles.item}>{item.Text}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16, 
        borderColor: '#bbb',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})