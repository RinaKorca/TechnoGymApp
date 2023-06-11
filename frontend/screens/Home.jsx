import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {defaultStyle, colors} from "../styles/styles"
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'

const Home = () => {


  
  return (
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

        {/** Search Bar */}
          <View>

            <TouchableOpacity>
              <Avatar.Icon 
              icon={"magnify"} 
              size={50}
              color={"gray"} 
              style={{backgroundColor: colors.color2, elevation: 12 }} />
            </TouchableOpacity>
          </View>
        </View>


        {/**Categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          

        <Button
          style={{
            backgroundColor: colors.color5,
            borderRadius: 100,
            margin: 5
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "gray",
            }}
          >

          </Text>
          Nice
        </Button>
        </View>
      </View>
  )
}

export default Home
