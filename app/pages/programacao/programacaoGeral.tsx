import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import  Programacao  from '../inicio/programacao'
import SelecionarData   from '../../../src/components/progamacao_intens/SelecionarData'


export default function ProgamacaoGeral() {
  return (
    <ScrollView className=" flex-1 py-10 "
    contentContainerClassName="flex-1 items-center ">
      <View className=' w-full h-[16.5%] flex justify-center items-center'>
        <Programacao />        
      </View> 
      <View className=' m-8 w-[98%] flex justify-center '>
        <SelecionarData />
      </View>
    </ScrollView>
  )
}