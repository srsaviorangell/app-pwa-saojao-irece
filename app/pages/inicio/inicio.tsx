import React, { Children, useContext } from 'react'
import { View, Text} from 'react-native'
import  Carrossel  from '../inicio/carrossel'
import Programacao from '../inicio/programacao'
import Cardss  from '../inicio/cardsGerais'
import { ThemeContext } from '../../../src/theme/ThemeContext';
import {  MapIcon } from '../../../src/components/Icons';

export default function InicioIndex() {
    const { dark, theme } = useContext(ThemeContext)
  
  return (
    <>
      <View className='relative flex items-center justify-center '>    

        <View className='absolute w-[96%] h-[17rem] bottom-[2rem] order'>

          <Carrossel />

        </View> 

        <View className='absolute w-[96%] h-[6rem] flex justify-center items-center top-[-1.5rem] '>

          <Programacao />
          
        </View> 

        <View className=' absolute  w-[96%] h-[16rem] flex justify-center items-center top-[5.5rem] '>

          <View id='1-geral' className='absolute flex flex-row  w-full h-[60%] gap-3 justify-center items-center bottom-[6.3rem] '>
            <Cardss id='1.1' className=' border  w-[46%] h-[100%] rounded-xl flex justify-center items-center'
            style={{ backgroundColor: dark ? theme.colors.cards.show.strong : theme.colors.cards.show.mustard }}

            >
              <MapIcon  />
              

              <Text className=' font-extrabold'
                style={{color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft}}

              >Mapa</Text>

              <Text className=' font-extrabold'
                style={{color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft}}
              >Localize-se</Text>
              

            </Cardss>

            <Cardss id='1.2' className='border w-[46%] h-[100%]  rounded-xl flex justify-center items-center'
            style={{ backgroundColor: dark ? theme.colors.cards.show.strong : theme.colors.cards.show.mustard }}

            >

              <Text className=' font-extrabold'

                style={{color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft}}

              >Molduras</Text>

              <Text className=' font-extrabold'
                style={{color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft}}
              >Registre os Momentos</Text>
              

            </Cardss>
          </View>

          <Cardss id='03' className=' border absolute w-[96%] h-[5.5rem]  top-[10.7rem] rounded-xl flex justify-center items-center '
            style={{ backgroundColor: dark ? theme.colors.text.secondary : theme.colors.text.disabled }}

          >

            <Text className=' font-extrabold'>Informações Dicas é Servicos</Text>

          </Cardss>



        </View>  

      </View>

    </>
  )
}
