import { View, Image, Text } from 'react-native';
import React from 'react';



export default function NavTop() {
    
    
  return (
    <>
        <View className="flex flex-row items-center h-[7rem]  mx-auto w-full bg-[#f0f0f0] border border-[rgba(0,0,0,0.1)] pt-[6rem]" 
        style={{
            shadowColor: "#FF0000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.08,
            shadowRadius: 10,
            elevation: 10,
        }}>
          <View className="absolute left-0 right-0 items-center bottom-[-7.5rem]"> 
            <Image source={require("../../assets/images/logosobra1.png")}
            className=" w-[8rem] h-[16rem]  " />
          </View>
          
          <View className=" items-end border  ml-auto bottom-10 right-8 h-[2.4rem] w-[5rem]  rounded-full bg-[#e0e0e0] border-t-[3px] border-l-[2px] border-black/10
  border-b-[1px] border-r-[1px] border-white/80">
            <Image source={require("../../assets/images/sol-sem-fundo.png")}
            className="bottom-[0.65rem] w-[28px] h-[48px] right-[38px]" />
            <Image />
            <Image source={require("../../assets/images/lua-sem-fundo.png")}
            className="bottom-[4.72rem] w-[28px] h-[65px] right-[2px]" />
            <Image />


          </View>

        </View>
        
       
    </>
  )
}