import { Stack } from "expo-router"
import { createContext, useState } from "react";
import { iguanes } from "../constants/Datas";




//création d'un context
export const IguanesContext = createContext(null);

const StackLayout = ()=> {


    //affectation des valeurs de bases des iguanes stocké dans data
    const [iguanesGlobal, setIguanesGlobal] = useState(iguanes.iguanes);
    //ajout de l'iguane créer aux reste de la liste
    const addToIguanesGlobal = (iguanes:any, iguaneToAdd:any) => {
        setIguanesGlobal(iguanes => [...iguanes, iguaneToAdd])
     }
    //modification de l'iguane ajouté et/ou supprimé des favoris
    const modifyIguanesGlobal = (iguanes:any, iguaneToModifie:any, newFav:any) => {
        console.log('newFav :>> ', newFav);
        setIguanesGlobal(iguanes => {
            let allIguanes = iguanes.filter(item => item.id !== iguaneToModifie.id);
            iguaneToModifie.isFav = newFav;
            return [...allIguanes, iguaneToModifie]
        })
    }

    return (
        <IguanesContext.Provider value={{iguanesGlobal, modifyIguanesGlobal, addToIguanesGlobal}}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            </Stack>
        </IguanesContext.Provider>    
    )
}

export default StackLayout