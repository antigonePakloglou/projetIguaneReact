import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, { useContext } from 'react'
import { IguanesContext } from '../_layout';
import Styles from '../../constants/Styles';
import { Link } from 'expo-router';


const ListeIguanes = () => {

    //récupéraration des iguanes grace au context
    const {iguanesGlobal} = useContext(IguanesContext) as unknown as IguaneContextType;

    const renderIguaneItem = ({item}:{item: any}) => {
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

  return (
    <View style={Styles.container}>
    <View style={Styles.titleIguaneView}>
          <Text style={Styles.titleIguane}>Nos iguanes à adopter</Text>
          <View style={{padding: 10}}>
            <Text style={Styles.infoIguane}>Lire les informations <Link href={"/infos"} style={Styles.linkInfoIguane}>ici</Link> avant toutes démarches</Text>
          </View>
      </View>
    <FlatList
      data={iguanesGlobal}
      renderItem={renderIguaneItem}
     numColumns={2}
    />
    
  </View>
  )
}

export default ListeIguanes