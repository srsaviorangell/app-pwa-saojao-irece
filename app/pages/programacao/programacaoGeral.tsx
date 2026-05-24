import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import  Programacao  from '../inicio/programacao'


export default function ProgamacaoGeral() {
  return (
    <ScrollView className=" flex-1 py-10"
    contentContainerClassName="flex-1 items-center ">
      <View className=' w-full h-[16.5%] flex justify-center items-center'>
        <Programacao />        
      </View> 
    </ScrollView>
  )
}