import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const Item = ({item, deleteTask}) =>{
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.name)}>
            <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: 'red',
        borderRadius: 10   ,
        paddingHorizontal:10,
        marginVertical: 10
    },
    text:{
     color: '#fff',
     fontWeight: 'bold',
     fontSize: 18
    }
})
export default Item;