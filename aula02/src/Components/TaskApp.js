import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';

const TaskApp = () => {
    
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Tarefas</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.taskList}>
        {taskList.map((item, index) => (
          <View key={index} style={styles.task}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      paddingHorizontal: 20,
    },
    header: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 5, // Ajustando padding para garantir que o input e botão tenham mais espaço
      alignItems: 'center',
      justifyContent: 'space-between', // Distribui o espaço entre o input e o botão
    },
    input: {
      flex: 1, 
      height: 40, // Define a altura do input
      borderWidth: 1, // Define uma borda
      borderColor: '#ccc', // Define a cor da borda
      paddingHorizontal: 10, // Adiciona padding interno
      marginRight: 10, // Espaçamento entre o input e o botão
      borderRadius: 5, // Adiciona um arredondamento nas bordas
    },
    taskList: {
      flex: 1,
      paddingTop: 20,
    },
    task: {
      backgroundColor: '#eee',
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 15, // Ajuste para o botão não ficar muito largo
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center', // Centraliza o texto dentro do botão
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bolder',
      fontSize: 14, // Ajusta o tamanho do texto no botão
    },
});

export default TaskApp;
