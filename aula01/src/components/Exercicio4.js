import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio4 = () => {

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];



  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <Text key={index} style={styles.textItem}>
          {item}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textItem: {
      fontSize: 18,
      marginVertical: 10,
    },
  });

export default Exercicio4