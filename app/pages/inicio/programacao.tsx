import { View, Text, Image} from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../../src/theme/ThemeContext';


export default function Programacao() {
  const { dark, theme } = useContext(ThemeContext)
  
 return (
   <View className='bg-[00ff00]  flex flex-row h-full w-full gap-2  justify-center items-center '>
        <View className='border  w-[11.5rem] h-full flex justify-center items-center rounded-xl'
          style={{backgroundColor: theme.colors.cards.palcoPrincipal,
                  borderWidth: 2,
                  borderColor: dark ? 'rgba(255,255,255,0.4)':'rgba(0,0,0,0.5)',
          }}>
          <Image source= {require("../../../assets/images/palco-principal-semfundo.png")}
          className=" absolute bottom-[1.1rem]  w-full h-full object-cover scale-75 "
          style={{ tintColor: dark ?theme.colors.text.disabled : theme.colors.background.primarySoft }}/>
          
           <Text className=" font-extrabold absolute top-[4.2rem]"
          style={{color: dark ? theme.colors.text.disabled : theme.colors.background.primarySoft
            
          }}

          >Palco Principal</Text>
        </View>
        <View className='relative w-[11.5rem] h-full flex justify-center items-center rounded-xl '
        
         style={{backgroundColor: theme.colors.cards.zeBigode2,
          borderWidth: 2,
          borderColor: dark ? 'rgba(255,255,255,0.3)':'rgba(0,0,0,0.5)',
          }}>
          <Image source= {require("../../../assets/images/zebarraca-semfundo.png")}
          className=" absolute bottom-[0.8rem]  w-full h-full object-cover scale-75 "
          style={{ tintColor: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft }}/>
          
          <Text className=" font-extrabold absolute top-[4.2rem]"
          style={{color: dark ? theme.colors.text.secondary : theme.colors.background.primarySoft
            
          }}

          >Barração Zé Bigode</Text>
        </View>
   </View>
 );
}