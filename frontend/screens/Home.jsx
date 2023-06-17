
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, {  useState } from "react";
import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const categories = [
  { category: "Machines", _id: "ajdlkna"},
  { category: "Dumbbells", _id: "ajdldkna"},
  { category: "Clothes", _id: "ajdslknfa"},
  { category: "Clothes", _id: "ajdhlknfa"},
  ]
  
  const products = [
    {
      price: 3224,
      stock: 23,
      name: "Shembull",
      _id: "adfsafasafs",
      images: [
        {
          url: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
        },
      ],
    },

    {
      price: 3223,
      stock: 23,
      name: "Pesha",
      _id: "adfsafasafs",
      images: [
        {
          url: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
        },
      ],
    },
  ]

const Home = () => {


const [category, setCategory] = useState("")
const [activeSearch, setActiveSearch] = useState(false)
const [searchQuery, setSearchQuery] = useState("")

const navigate = useNavigation();

const categoryButtonHandler = (id) => {
  setCategory(id)
}

const addToCardHandler = (id) => {
  console.log("Add to Cart", id)
}
 
  return (
<>
   {
    activeSearch && (
      <SearchModal 
      searchQuery = {searchQuery} 
      setSearchQuery = {setSearchQuery}
      setActiveSearch = {setActiveSearch} 
      products = {products}
      />
    )
   }
    <View style =
    {defaultStyle}>
    <Header/>

    {/**Headin Row */}

    <View 
      style={{
        paddingTop: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

         {/**Heading */}

    <View>

            <Text style={{fontSize: 25}}>Our</Text>
            <Text style={{fontSize: 25, fontWeight: "900"}}>Products</Text>

    </View>


        <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>

        </View>



        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          
          <ScrollView horizontal contentContainerStyle={{
            alignItems: "center",
          }}
          showsHorizontalScrollIndicator={false}>
          {
            categories.map((item, index) => (

              
        <Button
        key = {
          item._id
        }
        style={{
          backgroundColor:
          category===item._id? colors.color1 : colors.color5,
          borderRadius: 100,
          margin: 5
        }}

        onPress={()=>categoryButtonHandler(item._id)}
      >
        <Text
          style={{
            fontSize: 12,
            color:category===item._id? colors.color2 : "gray",
          }}
        >
          
          {item.category}
        </Text>
       
      </Button>
            ))
          }
          </ScrollView>
        </View>


        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
               
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />

      </>
  )
}

export default Home
