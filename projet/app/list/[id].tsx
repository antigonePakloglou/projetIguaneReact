import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Stack, router, useGlobalSearchParams } from 'expo-router'
import { IguanesContext } from '../_layout';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';

const DetailIguane = () => {
    const {id} = useGlobalSearchParams();
    //récupéraration des iguanes grace au context
    const {modifyIguanesGlobal, iguanesGlobal} = useContext(IguanesContext) as unknown as IguaneContextType;
    const [iguane, setIguane] = useState<Iguane | undefined>(iguanesGlobal[0]);
    const [loading, setLoading] = useState(true);
    const [iconName, setIconName] = useState("hearto");

    
    useEffect(() => {
        //recupere parametres
        if(id){
            //cast id en nbr
            let index : number = +id
            //recup iguane correspondant a l'id
            setIguane(iguane => {
                let iguaneToSearch = iguanesGlobal.find(item => item.id == index)
                return  iguaneToSearch
            });
            changeIconFav();
            setLoading(false);
        }
    }, [id, iguane]);

     //click ajout favoris
    const onPressFav = ()=> {
        if(iguane){
            let newFav = iguane.isFav ? false : true;
            //modifie la liste des iguanes global 
            modifyIguanesGlobal(iguanesGlobal, iguane, newFav);
            //gestion affichage de l'icon
            changeIconFav();
        }
       
    }
 

  const changeIconFav = ()=> {
    if(iguane){
        if(iguane.isFav == true){
            setIconName(iconName => "heart") 
        } else {  
            setIconName(iconName=> "hearto")
        }
    }
  }

  if(loading){
    return(
       <Text>Loading</Text>
    )
  }

  return (
    <View>
       <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={[Styles.iguaneCard, {marginTop: 100, alignSelf: 'center'}]}>
        <Text style={Styles.iguaneNom}>{iguane?.nom}</Text>
        <Image style={Styles.iguaneImg}
                  source={{uri: iguane?.image}}
            />
        
        
        <Text style={Styles.iguaneCaract}> {iguane?.poids} Kg - {iguane?.taille} cm - {iguane?.couleur}</Text> 
       
        <Text style={Styles.iguaneDescription}>{iguane?.description}</Text>
        <TouchableOpacity style={Styles.favoris} onPress={()=> onPressFav()}> 
          <AntDesign name={iconName} size={36} color={Colors.orange } /> 
        </TouchableOpacity>  
        <Text style={Styles.favorisText}>Ajouter au favoris</Text> 
      </View>
      <View style={Styles.accueilBtn}>
        <Button title="Accueil" color={Colors.blue}  onPress={()=>router.replace('/home')}></Button>
      </View>  
    </View>
  )
}

export default DetailIguane