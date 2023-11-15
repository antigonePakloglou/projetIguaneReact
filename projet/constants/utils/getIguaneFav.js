export default function getIguanesFavoris (iguanesGlobal){
    //récupération des iguanes qui sont favoris dans liste globale
    const filterIguanes = iguanesGlobal.filter((iguane) => iguane.isFav == true);
    return filterIguanes; 
  }