import { View, Text } from 'react-native'
import React from 'react'
import {  defaultStyle } from "../styles/styles"
import Heading from '../components/Heading'
import Header from '../components/Header'

const Cart = () => {
  return (
    <View
    style={{
      ...defaultStyle,
      padding: 0,
    }}
  >
    <Header back={true} emptyCart={true} />

    <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 100, marginLeft: 35 }}
      />

      <Text>Cart</Text>
    </View>
  )
}

export default Cart