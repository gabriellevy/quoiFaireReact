import { lstActivites } from "../donnees/lstActivites";
import { useState, useEffect } from 'react'


function Saisie() {
    const [dureeMin, setDureeMin] = useState(5)
    
    function gererDureeMin(e) {
        setDureeMin(e.target.value)

        // refresh calcul de la proposition
    }
    
    return (
        <div>
            <form>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                <span>
                    Durée min :
                    <input
                    type="text"
                    id="age"
                    maxLength={3}
                    pattern="[+-]?\d+(?:[.,]\d+)?"
                    placeholder="Âge du perso"
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