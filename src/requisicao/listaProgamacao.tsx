import AsyncStorage from '@react-native-async-storage/async-storage';

// Interface dos eventos (igual sua Palco)
 export interface Evento {
  id: string;
  artist: string;
  date: string;
  dia: string;
  mes: string;
  horario: string;
  stage: string;
}


function filtraPorPalco(eventos: Evento[], palco:string): Evento[]{
    return eventos.filter(evento => evento.stage === palco);
}

export async function requisicaoProgamacaoPorPalco(): Promise<Evento[]> {
  const cache = await AsyncStorage.getItem("eventos_completos")

  if(cache){
    return JSON.parse(cache)
  }

    try{
        const response = await fetch('https://api-para-alimenta-projeto.onrender.com/api/events')

          if (!response.ok){
                throw new Error(`Erro HTTP: ${response.status}`);
                
            }

            const json = await response.json();
            await AsyncStorage.setItem("eventos_completos", JSON.stringify(json.data))

            return json.data
        } catch (erro){
            return []
        }
}



export async function buscarPorPalco(palco: string): Promise<Evento[]> {
  const todosEventos = await requisicaoProgamacaoPorPalco();
  return filtraPorPalco(todosEventos, palco);
}

// FUNÇÃO PARA BUSCAR PALCO PRINCIPAL
export async function buscarPalcoPrincipal(): Promise<Evento[]> {
  return buscarPorPalco("PalcoPrincipal");
}

// FUNÇÃO PARA BUSCAR BARRACÃO ZÉ BIGODE
export async function buscarZeBigode(): Promise<Evento[]> {
  return buscarPorPalco("Barracão Zé Bigode");
}
