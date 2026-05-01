import "../src/styles/global.css"
import { Slot } from "expo-router"
import { View } from "react-native"
import NavBottom from "../src/components/NavBottom"
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'; 


export default function Layout() {


    const [active, setActive] = useState("home");

  return (
    <SafeAreaProvider style={{ flex: 1 }} className="bg-[#FFEDD480]">
      <StatusBar style="dark" />
      
      <View style={{ flex: 1 }}>
          <Slot />
      </View>
      <NavBottom active={active} setActive={setActive}/>
    </SafeAreaProvider>
  );
}