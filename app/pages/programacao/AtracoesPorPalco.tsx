import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../src/theme/ThemeContext'
import { EventContext } from '../../../src/conext/EventContext'

export default function AtracoesPorPalco() {

  const { eventos } = useContext(EventContext);

  const { dark, theme } = useContext(ThemeContext)  
  return (
  <View style={{ flex: 1 }} className=" w-full  ">
    <ScrollView  className=" w-full h-full"
    contentContainerClassName="pb-24 px-4 "
    showsVerticalScrollIndicator={false}
    nestedScrollEnabled={true}>
      <Text>TESTE</Text>
      {eventos.map((item) => (
        <Text key={item.id}>{item.artist}</Text>
      ))}
    </ScrollView>
  </View>
);}