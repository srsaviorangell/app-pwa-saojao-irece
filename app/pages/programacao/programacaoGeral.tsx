import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import  Programacao  from '../inicio/programacao'
import SelecionarData   from '../../../src/components/progamacao_intens/SelecionarData'
import AtracoesPorPalco from './AtracoesPorPalco'

export default function ProgamacaoGeral() {
  return (
    <View className=" relative" style={{flex: 1}}>
      <View className=" justify-center items-center">
        <View className=' w-full h-[30.5%] flex justify-center items-center'>
          <Programacao />        
        </View> 
        <View className=' m-8 w-[98%] flex justify-center '>
          <SelecionarData />
        </View>
        <View className='absolute flex justify-center  w-full top-[73%] h-[35rem]  '>
          <AtracoesPorPalco />
      </View>
        
      </View>
    
    </View>
  )
}