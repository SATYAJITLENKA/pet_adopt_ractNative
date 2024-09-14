import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { router } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>This is the login screen</Text>
      <Pressable style={styles.btn} onPress={()=>router.push('(tabs)/home')}>
        <Text>Login</Text>
      </Pressable>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  btn:{
    backgroundColor:Colors.PRIMARY,
    padding:10,
    width:'100%',


  }
})