import { View, Text, Pressable, Button, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { IguanesContext } from '../_layout';
import Styles from '../../constants/Styles';
import { Input } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';

const AddIguane = () => {
    //récupéraration des iguanes grace au context
    const {addToIguanesGlobal, iguanesGlobal} = useContext(IguanesContext) as unknown as IguaneContextType;

    const [nom, onChangeNom] = useState<string>("");
    const [couleur, onChangeCouleur] = useState<string>("");
    const [taille, onChangeTaille] = useState<string>("");
    const [poids, onChangePoids] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if(result.assets !== null){
        //recup du lien de l'image
        let img = result.assets[0].uri;
        setImage(img);
      }
    
      
    };
  
    const addIguane = ()=> {
      //création d'un iguane
      const newIguane : Iguane = {
        //a changer 
        id: 9,
        nom: nom,
        couleur: couleur,
        taille: parseInt(taille),
        poids: parseInt(poids),
        isFav: false,
        image: image
      }
      //ajout a la liste globale
      addToIguanesGlobal(iguanesGlobal, newIguane);
      router.replace("/");
    }



    return (
      <View style={[Styles.iguaneCard, {marginTop: 50, backgroundColor: Colors.white}]}>
          
        <Text style={Styles.inputTitre}>Nom</Text>
        <Input
          onChangeText={text => onChangeNom(text)}
          value={nom}/>
       
        <Text style={Styles.inputTitre}>Couleur</Text>
        <Input
          onChangeText={text => onChangeCouleur(text)}
          value={couleur}/>

        <Text style={Styles.inputTitre}>Taille</Text>
        <Input
         keyboardType='numeric'
          onChangeText={text => onChangeTaille(text)}
          value={taille}/>

        <Text style={Styles.inputTitre}>Poids</Text>
        <Input
        keyboardType='numeric'
        onChangeText={text => onChangePoids(text)}
        value={poids}/>

        <Text style={Styles.inputTitre}>Image</Text>
        
        <Pressable style={Styles.btnPhoto} onPress={pickImage}>
        <MaterialCommunityIcons name="file-image-plus" size={24} color={Colors.blue} />
        </Pressable>
          {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
       
        <View style={Styles.btnAjouter}>
          <Button onPress={()=> addIguane()} title="Ajouter l'annonce" color={Colors.orange} />
        </View>
       
    
       </View>
      )
}

export default AddIguane