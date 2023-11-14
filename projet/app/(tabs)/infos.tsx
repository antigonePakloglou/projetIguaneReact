import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles'

const infos = () => {
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={Styles.container}>
          <Text style={Styles.infoTitre}>Législation</Text>
          <Text style={Styles.infoText}>
            Iguana iguana est soumise à une simple déclaration de détention entre 1 et 3 spécimens détenus.{'\n'}Vous devez conserver toutes les copies justificatives (attestation de marquage, CIC, factures...).{'\n'}Au-delà de 3 individus, l’acquéreur doit envoyer préalablement en RAR à sa préfecture une demande comprenant : une autorisation préfectorale de détention d’animaux d’espèces non domestiques CERFA N°1244*01,{'\n'}un registre des entrées et sorties des animaux d’espèces non domestiques dans un élevage d’agrément (CERFA N°12448*01) avec également toutes les copies justificatives.
          </Text>
          <Text style={Styles.infoTitre}> Maintenance</Text>
          <Text style={Styles.infoText}>
            - Un terrarium de 200x80x150 cm est un minimum pour un spécimen adulte.{'\n'}
            - Ce lézard arboricole a des moeurs diurnes et reste plus souvent dans les hauteurs.{'\n'}
            - Il a besoin d’un point chaud à 30/35°C que l’on fournira avec une lampe chauffante; un point froid aux alentours de 25°C et 20/22°C la nuit.{'\n'}
            - Il lui faudra impérativement des UVB pour synthétiser la vitamine D3 indispensable pour que son organisme assimile le calcium.{'\n'}
            - Proposez-lui des branchages solides supportant son poids pour grimper, un bac d’eau au point froid, des cachettes avec des feuillages. Vous pouvez mettre des écorces de pin ou coco en guise de substrat.
          </Text>
          <Text style={Styles.infoTitre}>Alimentation</Text>
          <Text style={Styles.infoText}>
            - Ce lézard se nourrit quotidiennement de végétaux : Pissenlit, trèfles, plantain, légumes et fruits. Il est important de bien varier son alimentation afin d’éviter les carence alimentaire. Saupoudrez 2 à 3 fois par semaine les végétaux de calcium pur.{'\n'}
            - Vous pouvez également compléter son alimentation avec du Repashy pour végétarien : poudre que l’on délaie dans de l’eau pour former une compote.{'\n'}
            - Les juvéniles doivent impérativement être pulvérisés quotidiennement afin d’assurer l’hydratation, même si le terrarium a une forte hygrométrie.{'\n'}
          </Text>
          <Text style={Styles.infoTitre}>A noter</Text>
          <Text style={Styles.infoText}>
          - Les jeunes iguanes sont craintifs et se défendent en fouettant avec leur queue !{'\n'}
            - Il est important de bien sociabiliser l’iguane au contact de l’homme car une fois adulte, il sera plus facile de le manipuler pour le soigner, le sortir de son terrarium... L’iguane est intelligent et peut aisément être désensibilisé aux manipulations avec un peu de douceur et patience.{'\n'}
            - Il existe plusieurs mutations chez l’iguane : Albinos, rouge, bleu…{'\n'}
            - Le mâle possède une crête très développé.{'\n'}
            - Son espérance de vie est d’environ 10-15 ans !{'\n'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default infos