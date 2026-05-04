import React, { useContext, useEffect, useRef } from 'react';
import { Animated, Image, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from "../theme/ThemeContext";



export default function NavTop() {
    const { theme, dark, toggleTheme } = useContext(ThemeContext);
    
    const anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(anim, {
      toValue: dark ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
      }).start();
    }, [dark]);

    const translateX = anim.interpolate({// aqui vai mudar a distancia do botão e da animação ?
        inputRange:[0,1],
        outputRange:[0,30]

      })

  return (
    <>
        <View className="flex flex-row items-center h-[7rem]  mx-auto w-full border border-[rgba(0,0,0,0.1)] pt-[6rem]" 
        style={{
            backgroundColor: theme.colors.background.secondary ,
            shadowColor: theme.colors.details.border,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 10,
        }}>
          <View className="absolute left-0 right-0 items-center bottom-[-7.5rem]"> 
            <Image source={require("../../assets/images/logosobra1.png")}
            className=" w-[8rem] h-[16rem]  " />
          </View>
          
          
          <TouchableOpacity onPress={toggleTheme} className="items-end border  ml-auto bottom-10 right-8 h-[2.4rem] w-[5rem]  rounded-full  border-t-[3px] border-l-[2px] border-black/10
  border-b-[1px] border-r-[1px] border-white/80" style={{backgroundColor: dark ? theme.colors.background.elevanted : theme.colors.text.disabled }}> 
          <Animated.View 
           style={{
            transform: [{ translateX }],
          }}>
          <View >
    {dark ? (
            <Image source={require("../../assets/images/lua-sem-fundo.png")}
            className="bottom-[1.3rem] w-[28px] h-[65px] right-[2.4rem]" />
    ) : (
        <Image source={require("../../assets/images/sol-sem-fundo.png")}
            className="bottom-[0.65rem] w-[28px] h-[48px] right-[38px]" />
            
    )}
           
             </View>
          </Animated.View>
          </TouchableOpacity>

        </View>
        
       
    </>
  )
}