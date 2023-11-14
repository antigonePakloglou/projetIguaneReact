import qs from 'qs';
import { Linking } from 'react-native';

export async function sendEmail(to:any, subject:any, body:any, options = {}) {
  

    let url = `mailto:${to}`;

    // création de la chaine pour le mail
    const query = qs.stringify({
        subject: subject,
        body: body,
       
    });

    if (query.length) {
        url += `?${query}`;
    }

    // verification de l'utilisabilité du lien
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}

export const  envoyerMail = (isAdoption:boolean, iguane?: any) => {
    let destinataire = 'antigone.pakloglou@e-cdp.com';
    let objet = 'Demande d\'information';
    let corps = `Bonjour,\nJe vous contacts au sujet de la SPA pour iguane. J\'aurais souhaité échanger sur les modalités d\'adoptions avec un de vos membres.`;
    if(isAdoption){
        objet = `Demande d\'adoption iguane ${iguane.nom}`;
        corps = `Bonjour,\nJe vous contacts pour envisager l\'adoption de votre iguane ${iguane.nom}.`
    }
    sendEmail(
        destinataire,
        objet,
        corps
  ).then(() => {
      console.log('Message envoyé !');
  });
  }
