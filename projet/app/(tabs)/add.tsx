import { View, Text, Pressable, Button, Image, TextInput, Alert } from 'react-native'
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
    const [description, onChangeDescription] = useState<string>("");
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

    //trouver dernier id pour incrémenter le nouvel enregistrement
    const findLastIdIguanesGlobal : number = iguanesGlobal.reduce((maxId, currentValue) => {
      return Math.max(maxId, currentValue.id)
    }, 0);
  
    const addIguane = ()=> {
     if(nom.length > 0 && description.length > 0 && image.length > 0  && couleur.length > 0 && taille.length > 0 && poids.length > 0){
        //création d'un iguane
        const newIguane : Iguane = {
          //a changer 
          id: findLastIdIguanesGlobal + 1,
          nom: nom,
          description: description,
          couleur: couleur,
          taille: parseInt(taille),
          poids: parseFloat(poids),
          isFav: false,
          image: image
        }
        //ajout a la liste globale
        addToIguanesGlobal(iguanesGlobal, newIguane);
        router.replace("/");
     }
     else {
      Alert.alert('Annonce invalide', 'Veuillez remplir tout les champs svp.', [
        {text: 'OK'},
      ]);
     }
     
    }



    return (
      <View style={[Styles.iguaneCard, {marginTop: 50, backgroundColor: Colors.white, position: 'absolute', alignSelf: 'center'}]}>
        <View style={Styles.rowIguaneAdd}>
          <View style={Styles.inputWrap}>
            <Text style={Styles.inputTitreRow}>Nom</Text>
            <Input
              onChangeText={text => onChangeNom(text)}
              value={nom}/>
          </View>    
          <View style={Styles.inputWrap}>
            <Text style={Styles.inputTitreRow}>Couleur</Text>
            <Input
              onChangeText={text => onChangeCouleur(text)}
              value={couleur}/>
          </View>  
        </View>
          
        <View style={Styles.rowIguaneAdd}>
          <View style={Styles.inputWrap}>
            <Text style={Styles.inputTitreRow}>Taille</Text>
            <Input
              keyboardType='numeric'
              onChangeText={text => onChangeTaille(text)}
              value={taille}/>
          </View>
          <View style={Styles.inputWrap}>
            <Text style={Styles.inputTitreRow}>Poids</Text>
            <Input
              keyboardType='numeric'
              onChangeText={text => onChangePoids(text)}
              value={poids}/>
          </View>    
        </View>
        <Text style={Styles.inputTitre}>Description</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          style={Styles.inputDescription}
          value={description}
          onChangeText={text => onChangeDescription(text)}
          />
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