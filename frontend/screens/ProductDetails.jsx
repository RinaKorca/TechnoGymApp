import {  
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity, } from 'react-native'
    import React, { useEffect, useRef, useState } from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import Carousel from "react-native-snap-carousel"



const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({route: {params}}) => { console.log(params.id)
const isCarousel = useRef(null)

const images = [{
    id: "adasfsafaf",
    url: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",

},
{
    id: "adasfsafaf",
    url: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",

},

]
    
  return (
    <View
    style={{
      ...defaultStyle,
      padding: 0,
      backgroundColor: colors.color1,
    }}
  >
     <Header back={true} />

        <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
        />

    

      <Text>ProductDetails</Text>
    </View>
  )
}

const CarouselCardItem = ({ item, index }) => (
    <View style={style.container} key={index}>
      <Image source={{ uri: item.url }} style={style.image} />
    </View>
  )

  const style = StyleSheet.create({
    container: {
      backgroundColor: colors.color1,
      width: ITEM_WIDTH,
      paddingVertical: 40,
      height: 380,
    },
    image: {
      width: ITEM_WIDTH,
      resizeMode: "contain",
      height: 250,
    },
    quantity: {
      backgroundColor: colors.color4,
      height: 25,
      width: 25,
      textAlignVertical: "center",
      textAlign: "center",
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.color5,
    },
  
    btn: {
      backgroundColor: colors.color3,
      borderRadius: 100,
      padding: 5,
      marginVertical: 35,
    },
  });
  
export default ProductDetails