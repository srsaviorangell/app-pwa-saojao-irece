import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { MapIcon, CameraMoldura } from '../../../src/components/Icons'
import { ThemeContext } from '../../../src/theme/ThemeContext'
import Cardss from '../inicio/cardsGerais'
import Carrossel from '../inicio/carrossel'
import Programacao from '../inicio/programacao'
import { Link } from 'expo-router'


export default function InicioIndex() {
    const { dark, theme } = useContext(ThemeContext)
  
  return (
    <>
    
      <View className=' flex items-center justify-center  h-full w-full '>    

        <View className=' w-[96%] h-[17rem] '>

          <Carrossel />

        </View> 

        <View className=' w-full h-[16.5%] flex justify-center items-center  '>

          <Programacao />
          
        </View> 

        <View className='   w-[96%] h-[33%] flex items-center   gap-2  top-[1.5%]'>

          <View id='1-geral' className='  flex flex-row  w-full h-[65%] gap-3 justify-center items-center '>


            <Link href="/pages/maps/maps" asChild>

              <Cardss id='1.1' className=' border  w-[46%] h-[100%] rounded-xl flex justify-center items-center gap-1'
              style={{ backgroundColor: dark ? theme.colors.cards.show.strong : theme.colors.cards.show.mustard }}

              >
                
                
                <View className='border-[#FFD6A5cc] h-[4.5rem] w-[4rem] rounded-xl bg-[#FFD6A5cc] flex justify-center items-center  '
                          >
                  <MapIcon size={40} color={ dark ? theme.colors.text.disabled : theme.colors.text.disabled}
                  />
                </View>

                <Text className=' font-extrabold'
                  style={{color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft}}

                >Mapa
                </Text>

                

              </Cardss>
            </Link>


            <Link href="/pages/molduras/moldura" asChild>

              <Cardss id='1.2' className='border w-[46%] h-[100%]  rounded-xl flex justify-center items-center'
              style={{ backgroundColor: dark ? theme.colors.cards.show.strong : theme.colors.cards.show.mustard }}

              >


                <View className='border-[#FFD6A5cc] h-[4.5rem] w-[4rem] rounded-xl bg-[#FFD6A5cc] flex justify-center items-center  '>
                  <CameraMoldura size={40} color={ dark ? theme.colors.text.disabled : theme.colors.text.disabled}
                  />
                </View>


                <Text className=' font-extrabold'

                  style={{color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft}}

                >Molduras</Text>

              
                

              </Cardss>
            </Link>
          </View>
          
          <Link href="/pages/informacoes/informacoes" asChild>

            <Cardss id='03' className=' border  w-[96%] h-[6rem]  top-[1%] rounded-xl flex justify-center items-center '
              style={{ backgroundColor: dark ? theme.colors.text.secondary : theme.colors.text.disabled }}

            >

              <Text className=' font-extrabold'
                style={{color: dark ? theme.colors.details.secondary : theme.colors.background.primarySoft}}

              >Informações Dicas é Servicos</Text>

            </Cardss>

          </Link>
        </View>  

      </View>

    </>
  )
}
