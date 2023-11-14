import { View, Text, Pressable, Image, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { IguanesContext } from '../_layout';
import { Link } from 'expo-router';
import Styles from '../../constants/Styles';

const Favoris = () => {
  //récupéraration des iguanes grace au context
  const {iguanesGlobal} = useContext(IguanesContext) as unknown as IguaneContextType;
  const [iguanesFavoris, setIguanesFavoris] = useState<Iguane[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getIguanesFavoris();
    setLoading(false);
  }, [iguanesGlobal]);

  const getIguanesFavoris = ()=> {
    //récupération des iguanes qui sont favoris dans liste globale
    const filterIguanes = iguanesGlobal.filter((iguane:any) => iguane.isFav == true);
    setIguanesFavoris([...filterIguanes]); 
  }

  const renderIguaneFavorisItem = ({item}:{item: any}) => {
    return(
        <Link 
            href={{
            pathname: "/list/[id]",
            params: { id: item.id }
        }} asChild>
            <Pressable onPress={()=> null}>
                <View style={Styles.iguanesCards}>
                    <Text style={Styles.iguanesTitle}>{item.nom}</Text>
                    <Image style={Styles.iguanesImg}
                            source={{uri: item.image}}
                        />
                </View>   
            </Pressable>
        </Link>
    )
   }

    if(loading){
        return(
        <Text>Loading</Text>
        )
    }

  return (
    <View style={Styles.container}>
    <View style={Styles.titleIguaneView}>
          <Text style={Styles.titleIguane}>Listes des favoris</Text>
      </View>
    <FlatList
      data={iguanesFavoris}
      renderItem={renderIguaneFavorisItem}
     numColumns={2}
    />
    
  </View>
  )
}

export default Favoris