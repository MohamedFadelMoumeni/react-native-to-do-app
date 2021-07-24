import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import Item from './Item';

const DirectoryItem = ({tasks, deleteTask}) =>{


    return (
        
        <FlatList
        style={styles.scroll}
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => <Item deleteTask={deleteTask} deleteTask={deleteTask} item={item}/>}
        />
       
    )
}

const styles = StyleSheet.create({
    scroll:{
     paddingHorizontal: 10
    }
})
export default DirectoryItem;