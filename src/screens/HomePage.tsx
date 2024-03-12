import { View, Text } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text style={{
            fontSize: 30,
            color: 'black'
        }}>Home Page</Text>
    </View>
  )
}

export default HomePage