import React, { useRef, useState } from 'react';
import { Animated, Image, TouchableOpacity, View } from 'react-native';



export default function NavTop() {
    // temos que declara o stado que se encontra que e o claro thema 
    const [dark, setDark] = useState(false); // aqui declamos que ele e false pq o dark e so true quando a lua aparace 

    // agora vamos para o anim  
    const anim = useRef(new Animated.Value(0)).current;
    // ao instaciam um nova objeto com o anim direto Animated temos o useref que faz usando analogia cache de rende ! ele mantem os d enquanto ta no render 
    // ados
    const translateX = anim.interpolate({// aqui vai mudar a distancia do botão e da animação ?
        inputRange:[0,1],
        outputRange:[0,30]

      })
    
    
    const toggleThema = () =>{
      Animated.timing(anim,{ // aqui usamos o const  
        toValue: dark ? 0 : 1, // aqui diz que se dark for true anima para zero (0) esquerda (1)direita
        duration: 300, //duration
        useNativeDriver: true,

      }).start() // starta a animação 
      setDark(!dark) // fica obsertando e muda de estado 

      
    }
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
          
          
          <TouchableOpacity onPress={toggleThema} className="items-end border  ml-auto bottom-10 right-8 h-[2.4rem] w-[5rem]  rounded-full bg-[#e0e0e0] border-t-[3px] border-l-[2px] border-black/10
  border-b-[1px] border-r-[1px] border-white/80"> 
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