import getIguanesFavoris from "../getIguaneFav"

 it('Should return ', ()=> {
    const iguaneGlobal = [
        {
            id: 3,
            isFav : true,
        },
        {
            id: 25,
            isFav : false,
        },
        {
            id: 33,
            isFav : true,
        }
]
    expect(getIguanesFavoris(iguaneGlobal)).toEqual(expect.arrayContaining([expect.objectContaining({id: 3}), expect.objectContaining({id: 33})]));
}) 
