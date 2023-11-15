import { View, Text, Image, TouchableOpacity, Button, Pressable, Alert } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Stack, router, useGlobalSearchParams } from 'expo-router'
import { IguanesContext } from '../_layout';
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { envoyerMail } from '../../constants/SendEmail';


const DetailIguane = () => {
    const {id} = useGlobalSearchParams();
    //récupéraration des iguanes grace au context
    const {modifyIguanesGlobal, iguanesGlobal} = useContext(IguanesContext) as unknown as IguaneContextType;
    const [iguane, setIguane] = useState<Iguane | undefined>(iguanesGlobal[0]);
    const [loading, setLoading] = useState(true);
    const [iconName, setIconName] = useState("hearto");

    //permission médiatheque appareil
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const imageRef = useRef();

    //demande des autorisations
    if (status === null) {
      requestPermission();
    }
  
    
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

  //sauvegarder les annonces sur l'appareil
  const saveIguaneAnnonceAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
        format: 'jpg'
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        Alert.alert('Annonce sauvegardée', 'Disponible dans votre galerie', [
          {text: 'OK'},
        ]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
       <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View ref={imageRef} collapsable={false}>
        <View style={[Styles.iguaneCard, {marginTop: 100, alignSelf: 'center', backgroundColor: Colors.white}]}>
          <Text style={Styles.iguaneNom}>{iguane?.nom}</Text>
          <Image style={Styles.iguaneImg}
                    source={{uri: iguane?.image}}
              />
          
          <Text style={Styles.iguaneCaract}> {iguane?.poids} Kg - {iguane?.taille} cm - {iguane?.couleur}</Text> 
        
          <Text style={Styles.iguaneDescription}>{iguane?.description}</Text>
          <View style={Styles.favoris}>
            <TouchableOpacity  onPress={()=> onPressFav()}> 
              <AntDesign name={iconName} size={32} color={Colors.orange } /> 
            </TouchableOpacity>  

            <TouchableOpacity style={{marginLeft: 20}} onPress={()=> envoyerMail(true, iguane)}>
            <AntDesign name="mail" size={33}  color={Colors.blue }  />
            </TouchableOpacity>
            
            <TouchableOpacity style={{marginLeft: 20}} onPress={()=> saveIguaneAnnonceAsync()}>
              <FontAwesome name="save" size={32} color={Colors.darkBlue} />
            </TouchableOpacity>
          </View>
        
        </View>
      </View>
      <View style={Styles.accueilBtn}>
          <Button title="Accueil" color={Colors.blue}  onPress={()=>router.replace('/home')}></Button>
      </View> 
    </View>
  )
}

export default DetailIguane