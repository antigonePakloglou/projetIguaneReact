import addIguane from "../addIguane";

 it('Should return ', ()=> {
    const iguane = {
        id: 1,
        nom: 'test',
        description: 'testDesc',
        couleur: 'testCouleur',
        taille: 1,
        poids : 2,
        isFav : false,
        image : "testImg"
    }
    const iguaneGlobal = [{
        id: 3,
        nom: 'glob',
        description: 'glob',
        couleur: 'glob',
        taille: 3,
        poids : 3,
        isFav : false,
        image : "glob"
    }]
    expect(addIguane(iguane, iguaneGlobal)).toEqual(expect.arrayContaining([expect.objectContaining({id: 1, nom: 'test', description: 'testDesc', couleur: 'testCouleur',  taille: 1,  poids : 2,  isFav : false, image : "testImg"})]));
}) 
