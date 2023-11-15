 //trouver dernier id pour incrémenter le nouvel enregistrement
export default  function findLastIdIguanesGlobal(iguanesGlobal){
    return iguanesGlobal.reduce((maxId, currentValue) => {
        return Math.max(maxId, currentValue.id)
      }, 0);
}