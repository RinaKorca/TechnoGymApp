import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"
import { colors } from "../styles/styles"
import { Avatar } from "react-native-paper"
import { iconOptions } from "../screens/ProductDetails"

const CartItem = ({

    name,
    amount,
    qty,
    stock,
    index,
    imgSrc,
    id, 
    incrementHandler,
    decrementHandler,
}) => {
  return (
    <View
    style={{
      flexDirection: "row",
      height: 100,
      marginVertical: 20,
    }}
  >
     <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
    <Image
          source={{
            uri: imgSrc,
          }}
          style={{
            width: 100,
            height: "100%",
            resizeMode: "contain",
            top: "-20%",
            left: "20%",
          }}
        />

      </View>
      <View
        style={{
          width: "40%",
          paddingHorizontal: 25,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
          }}
        >
          {name}
        </Text>

        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
            fontWeight: "900",
          }}
        >
          {amount}€
        </Text>
      </View>

      <View>
        
      </View>
      
    </View>
  )
}

export default CartItem