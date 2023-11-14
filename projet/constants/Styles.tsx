import {StyleSheet} from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
    /* Toutes les pages */
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    titleIguaneView: {
        marginTop: 50,
    },
    titleIguane: {
       fontWeight: '700',
       fontSize: 22,
       color: Colors.orange,
       textDecorationLine: 'underline'
    },
    /* Toutes les iguanes */
    iguanesCards: {
        marginTop: 15,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.darkBlue,
        borderRadius: 20,
        padding: 5,
        width: 150,
        height: 200
    },
    iguanesImg: {
        width: 90,
        height: 90,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    iguanesTitle: {
        fontSize: 15,
        textDecorationLine: 'underline',
        textAlign: 'center',
        color : Colors.darkBlue
    },
    infoIguane: {
        fontSize: 12,
        textAlign: 'center'
    },
    linkInfoIguane : {
        fontWeight: '600',
        textDecorationLine: 'underline'
    },
    /* Affichage unitaire iguane */
    iguaneCard: {
        marginTop: 50,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.darkBlue,
        borderRadius: 50,
        padding: 20,
        width: 300
        
       
    },
    iguaneImg: {
        width: 250,
        height: 190,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    iguaneNom : {
        color: Colors.orange,
        fontSize: 22,
        textDecorationLine: 'underline'

    },
    iguaneDescription: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 16,
        padding: 5
        
    },
    iguaneCaract: {
        fontSize: 16,
        color: Colors.blue
    },
    favoris: {
        marginTop: 25,
        flexDirection: "row"
    },
    favorisText: {
        fontSize: 8,
        fontStyle: 'italic'
    },
    accueilBtn : {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* Ajout iguane */
    btnAjouter: {
        marginTop: 10
    },
    inputDescription: {
        width:280, 
        textAlignVertical: 'top',
        backgroundColor: Colors.ligthBlue,
        borderRadius: 10,
        padding: 10
    }, 
    inputTitre : {
        fontSize: 16,
        fontWeight: '800'
    },
    inputTitreRow : {
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center'
    },
    btnPhoto: {
        height: 60,
        width: 60,
       
        borderRadius: 30,
        justifyContent : 'center',
        alignItems : 'center',
      
    },
    rowIguaneAdd: {
        flex: 1,
        flexDirection: "row"
    },
    inputWrap: {
        flex: 1,
    },
    /* infos Iguane */
    infoTitre: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        color: Colors.darkBlue,
        textDecorationLine: 'underline'

    },
    infoText : {
        textAlign: 'center',
        fontSize: 12
    },
    infosHeader : {
       fontSize: 22,
       textDecorationLine: 'underline'
    }
})