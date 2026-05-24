import { View, Text, Image, Pressable} from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../../src/theme/ThemeContext';
import { Link } from 'expo-router'


export default function Programacao() {
  const { dark, theme } = useContext(ThemeContext)
  
 return (
   <View className=' flex flex-row h-full w-full gap-2  justify-center  '>
        
        <Link href="/pages/programacao/programacaoGeral" asChild>
        
          <Pressable id='palcoPrincipal' className='border  w-[45%] h-full flex  items-center rounded-xl'
            style={{backgroundColor: theme.colors.cards.palcoPrincipal,
                    borderWidth: 2,
                    borderColor: dark ? 'rgba(255,255,255,0.4)':'rgba(0,0,0,0.5)',
            }}>
            <Image source= {require("../../../assets/images/palco-principal-semfundo.png")}
            className="  bottom-[20%]  w-full h-full object-cover scale-75 "
            style={{ tintColor: dark ?theme.colors.text.disabled : theme.colors.background.primarySoft }}/>
            
            <Text className=" font-extrabold  bottom-[35%]"
            style={{color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft
              
            }}

            >Palco Principal</Text>
          </Pressable>
        
        </Link>
        
        <Link href="/pages/programacao/programacaoGeral" asChild>

          <Pressable id='barracaoZeBigode' className='relative w-[45%] h-full flex items-center rounded-xl '
          
          style={{backgroundColor: theme.colors.cards.zeBigode2,
            borderWidth: 2,
            borderColor: dark ? 'rgba(255,255,255,0.3)':'rgba(0,0,0,0.5)',
            }}>
            <Image source= {require("../../../assets/images/zebarraca-semfundo.png")}
            className="  bottom-[15%]   w-full h-full object-cover scale-75 "
            style={{ tintColor: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft }}/>
            
            <Text className=" font-extrabold  bottom-[35%]"
            style={{color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft
              
            }}

            >Barração Zé Bigode</Text>
          </Pressable>
          
        </Link>

   </View>
 );
}