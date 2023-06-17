import {  
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity, } from 'react-native'
    import React, {  useRef, useState } from "react"
import { colors, defaultStyle } from "../styles/styles"
import Header from "../components/Header"
import Carousel from "react-native-snap-carousel"
import { Avatar } from "react-native-paper"



const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH

export const iconOptions = {
    size: 20,
    style: {
      borderRadius: 5,
      backgroundColor: colors.color5,
      height: 25,
      width: 25,
    },
  }

const ProductDetails = ({route: {params}}) => { console.log(params.id)

const name = "Dumbbells"
const price = 4
const stock = 6
const description = "Askdjsdo"


const isCarousel = useRef(null)
const [quantity, setQuantity] = useState(1)


const incrementQty = () => {
    if (stock <= quantity)
      return Toast.show({
        type: "error",
        text1: "Maximum Value Added",
      });
    setQuantity((prev) => prev + 1);
  };
  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };


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
         <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >

        <Text
          numberOfLines={2}
          style={{
            fontSize: 25,
          }}
        >
          {name}
        </Text>
    
      <Text
          style={{
            fontSize: 18,
            fontWeight: "900",
          }}
        >
          {price}€
        </Text>

        <Text
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 15,
          }}
          numberOfLines={8}
        >
          {description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: colors.color3,
              fontWeight: "100",
            }}
          >
            Quantity
          </Text>

          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
             <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>

            <Text style={style.quantity}>{quantity}</Text>

            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>

             </View>
          </View>
        </View>
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