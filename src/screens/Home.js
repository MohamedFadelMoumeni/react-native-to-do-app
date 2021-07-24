import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import DirectoryItem from '../components/DirectoryItem';

const HomeScreen = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([
        {
            name: 'task 1'
        },
        {
            name: 'task 2'
        },
        {
            name: 'task 3'
        },
    ]);
    const deleteTask = (item) =>{
        setTasks(tasks.filter(({name}) => name != item))

    }
    const addTask = () => {
        if(task.length){
            setTasks([...tasks, {name: task}]);
        Keyboard.dismiss();
        setTask('');

        }
        
    }
    return (
        <View style={{flex: 1}}>
            <Text style={styles.text}>To Do App</Text>
            <ScrollView style={{flex: 1, marginBottom:50}}>
            <DirectoryItem tasks={tasks} deleteTask={deleteTask}/>
            </ScrollView>
            <View style={styles.view}>
                <TextInput  value={task} onChangeText={setTask} style={styles.input} placeholder="Add Item"/>
                <TouchableOpacity onPress={() => addTask()}>
                    <Text  style={styles.click}>Click here</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 20,
        marginVertical: 20
    },
    view: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height : 50,
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: '#fff',
        marginTop:10
    },
    input:{
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        flex: 1,
        fontSize: 20,
        paddingHorizontal: 10
    },
    click:{
        fontSize: 20,
        paddingHorizontal: 20
    }
})
export default HomeScreen;