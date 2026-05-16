import { View, FlatList, Image } from 'react-native'
import type { FlatList as FlatListType } from 'react-native'
import React, { useEffect, useRef, useState, useContext } from 'react'
import { ViewToken } from 'react-native'
import { requisicaoCarrossel } from "../../../src/requisicao/requisicaoCarrossel"
import { ThemeContext } from '../../../src/theme/ThemeContext';




export default function Carrossel() {

    const flatListRef = useRef<FlatList<any>>(null)
    
    const { dark, theme } = useContext(ThemeContext)

    const [indexAtual, setIndexAtual] = useState(0) 
    const [data, setData] = useState<any[]>([])

    const viewabilityConfig = { // consta que vai vericar qunado inte e visivel na tela
        itemVisiblePercentThreshold: 50,               // aqui e o limie que usamos para dizer exemplo ele sera visivel quando tiver 50% da tela no card
    }

    const onViewableItemsChanged  = useRef( // a tradução direta do card e ( quando os intens visiveis muda) resumindo ele vai pegar qunado ele deixa de ser visivel e muda 
        ({ viewableItems  }: { viewableItems: ViewToken[] }) => {  // viewableItems -> e o item que esta na teala agora 
        if (viewableItems.length > 0 ){
            setIndexAtual(viewableItems[0].index ?? 0)
        }
    }).current

    useEffect(()=>{
        async function carregarEventos(){
            const eventos = await requisicaoCarrossel()
            setData(eventos)
        }
        carregarEventos()
    }, [])

    useEffect(()=>{
        if( data.length === 0 ) return 

        const interval = setInterval(()=>{
            const nextIndex = ( indexAtual + 1) % data.length

            flatListRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true,
            })
            setIndexAtual(nextIndex)
        },7000)
        return()=> clearInterval(interval)
    },[indexAtual, data])



  return (
    <View   style={{ 
            height: "97%",
            overflow:'hidden',
           
            
        }}>
        <FlatList 
        style={{ 
            borderRadius: 12, 
            borderWidth: 2,
            borderColor:'transparent',
            shadowColor: "rgba(245,73,0,0.6)",
            shadowOffset: { width:3, height: 3 },
            shadowOpacity: 1,
            shadowRadius: 4,
            elevation: 8,
            backgroundColor: 'transparent',             
            }}
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => ( 
            <View  style={{ width:340,
                            height: 200,
                            marginRight: 10, 
                            
            }}>
                <Image source={{ uri: dark ? item.gallery[1] : item.gallery[0] }} 
                    style={{
                        width:"100%",
                        height:"100%",
                        borderWidth: 3,
                        borderColor: dark ? 'rgba(245,73,0,0.3)':'rgba(0,0,0,0.5)',
                        
                    }}
                    className='rounded-xl '
                />
            </View>
        )}
        horizontal // deixa flat na horizontal 
        showsHorizontalScrollIndicator={false} //esconder bara de rolagem 
        
        />
        <View className='flex-row justify-center mt-4'>
            {data.map((_, index) => (
                <View
                    key={index}
                    className={`mx-1 rounded-xl ${
                    index === indexAtual
                     ? "w-4 h-2.0 bg-black"
                    : "w-1.5 h-1.5 bg-[#D1D5DB]"
                      }`}
                />
            ))}
        </View> 
  


    </View>
  )
}

