import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../theme/ThemeContext'
import { EventContext } from '../conext/EventContext'
import { getStyles } from "../styles/style";
import { FavoritoIcon } from "../components/Icons"



export default function cardsParaPageProgamacao() {
    const { eventos } = useContext(EventContext);
    
      const { dark, theme } = useContext(ThemeContext)  
        const styles = getStyles(theme, dark)
  return (
    <>
        <View id="card-conteiner" className=' h-[10rem] rounded-[1.2rem] flex flex-row justify-between items-center ' style={[styles.card, styles.cssbuttonsIoButton]}>
    
            <View id="card-filho1" className=' border-r w-[22%] h-full flex justify-center items-center gap-2'>
    
              <Text className=" font-semibold text-sm"
                style={[styles.textPadroes]}>SEX</Text>
    
              <Text className=" font-black text-3xl " 
                style={[styles.textDataChamativa]}>20</Text>
    
    
              <Text className=" font-semibold text-sm"
              style={[styles.textPadroes]}>JUN</Text>
    
              <Text className=" font-semibold text-black "
              style={[styles.textPadroes]}>22h</Text>
    
            </View>
    
            <View id="card-filho2" className=' w-[75%] h-full flex justify-start'>
                <View className=' flex flex-row justify-between  '>
                  <Text  className=" font-semibold text-sm mt-[15]"
                  style={[styles.textPadroes]}>SÃO JOÃO DO SECULO</Text>
                   
                  <TouchableOpacity className=' mr-3  mt-3 p-1 rounded-full bg-white/40'>
                    <FavoritoIcon size={25} color="rgba(0, 0, 0, 0.5)" />
                  </TouchableOpacity> 
                </View>
    
                <View className=' flex  justify-between  gap-5'>
    
                    <Text  className=" font-semibold text-3xl"
                    style={[styles.textBandas]}>Wesley Safadão</Text>
    
                    <Text  className=" font-semibold text-lg"
                  style={[styles.textPadroes]}>palco</Text>
                  
                </View>
              
    
            </View>
    
        </View>
    
    </>
  )
}
 // {eventos.map((item) => (
        

        
   //   ))}
     //   <Text key={item.id}>{item.artist}</Text>
