import React from 'react'
import { View, Text } from 'react-native'
import  Carrossel  from '../inicio/carrossel'
import Programacao from '../inicio/programacao'

export default function InicioIndex() {
  return (
    <>
    <View className='relative flex items-center justify-center '>    
      <View className='absolute w-[96%] h-[17rem] bottom-[2rem] border'>
        <Carrossel />
      </View> 
      <View className='absolute w-[96%] h-[10rem] border top-[-1.5rem] '>
        <Programacao />
      </View>       
    </View>
    </>
  )
}
