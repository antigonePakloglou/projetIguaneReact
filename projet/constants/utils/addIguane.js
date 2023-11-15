 //créer un iguane 
 export default  function addIguane(iguane, iguanesGlobal){
    const iguaneGlobal = [];
    const newIguane = {
        id: iguane.id,
        nom: iguane.nom,
        description: iguane.description,
        couleur: iguane.couleur,
        taille: parseInt(iguane.taille),
        poids: parseFloat(iguane.poids),
        isFav: false,
        image: iguane.image
        }
       iguanesGlobal = [...iguanesGlobal, newIguane] 
       return iguanesGlobal;
}