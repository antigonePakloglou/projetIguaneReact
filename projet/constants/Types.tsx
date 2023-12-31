type Iguane = {
    id: number
    nom: string
    description: string
    couleur: string
    taille: number
    poids : number
    isFav : boolean
    image : string
}

interface IguaneContextType {
    iguanesGlobal: Iguane[];
    addToIguanesGlobal: (iguanesGlobal:any, iguaneToAdd:any) => void;
    modifyIguanesGlobal: (iguanesGlobal:any, iguaneToModifie:any, newFav:any) => void;
} 