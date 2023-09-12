import { lstActivites } from "../donnees/lstActivites";
import { useState, useEffect } from 'react'


function Saisie() {
    const [resultat, setResultat] = useState("???")
    const [dureeMin, setDureeMin] = useState(5)

    function gererResultat() {
        // refresh calcul de la proposition
        //1. récupérer valeurs

        //2. comparer avec donnes de lstActivites

        //3. mettre els 3 premiers dans une chaine de caractère et afficher
        setResultat("je sais aps trop quoi");
    }
    
    function gererDureeMin(e) {
        setDureeMin(e.target.value)

        gererResultat()
    }
    
    return (
        <div>
            <div>{resultat}</div>
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
            </form>
            </div>
  )
}

export default Saisie