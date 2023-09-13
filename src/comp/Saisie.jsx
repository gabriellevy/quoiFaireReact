import { lstActivites } from "../donnees/lstActivites";
import { useState, useEffect } from 'react'


function Saisie() {
    const [resultat, setResultat] = useState("???")
    const [dureeMin, setDureeMin] = useState(5)
    const [dureeMax, setDureeMax] = useState(5)

    function gererResultat() {
        // refresh calcul de la proposition
        //1. récupérer valeurs

        //2. comparer avec donnes de lstActivites

        //3. mettre els 3 premiers dans une chaine de caractère et afficher
        let lignes = [ 'durée min : ' + dureeMin, "durée max : " + dureeMax]
        const listLignes = lignes.map((ligne) =>
            <li key={ligne.toString()}>      {ligne}
            </li>
        );
        setResultat(listLignes);
    }
    
    function gererDureeMin(e) {
        setDureeMin(e.target.value)
        gererResultat()
    }
    
    function gererDureeMax(e) {
        setDureeMax(e.target.value)
        gererResultat()
    }
    
    return (
        <div>
         {resultat}
            <form>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                    <span>
                        Durée min :
                        <input
                        type="text"
                        id="dureeMin"
                        maxLength={3}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        onChange={gererDureeMin}
                        value={dureeMin}
                        />
                    </span>
                </div>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                    <span>
                        Durée max :
                        <input
                        type="text"
                        id="dureeMax"
                        maxLength={3}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        onChange={gererDureeMax}
                        value={dureeMax}
                        />
                    </span>
                </div>
            </form>
            </div>
  )
}

export default Saisie