import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";


export const cartItems = [{
    name: "Clothes",
    image: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
    product: "afdsfsafsarg",
    stock: 4,
    price: 12,
    quantity: 2,
},
{
    name: "Dumbbells",
    image: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
    product: "afdafsafsarg",
    stock: 2,
    price: 38,
    quantity: 2,
},
{
    name: "Machine",
    image: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
    product: "gdsfsafsarg",
    stock: 4,
    price: 33,
    quantity: 2,
}
]

const Cart = () => {
    const navigate = useNavigation()
    const decrementHandler = (id, qty, stock) => {}
    const incrementHandler = (id, qty) => {}


  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 110, marginLeft: 35 }}
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            cartItems.map((i, index) => (
              <CartItem
                
                key={i.product}
                id={i.product}
                name={i.name}
                stock={i.stock}
                amount={i.price}
                imgSrc={i.image}
                index={index}
                qty={i.quantity}
                incrementhandler={incrementHandler}
                decrementHandler={decrementHandler}
              />
            ))
        }
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>4 Items</Text>
        <Text>20€</Text>
      </View>

      <TouchableOpacity   onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }>
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;