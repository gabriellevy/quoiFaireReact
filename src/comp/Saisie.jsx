import { lstActivites } from "../donnees/lstActivites";
import { useState, useEffect } from 'react'


function Saisie() {
    const [resultat, setResultat] = useState("???")
    const [duree, setDuree] = useState(30)
    const [constructif, setConstructif] = useState(5)
    const [defoulement, setDefoulement] = useState(5)
    const [relaxation, setRelaxation] = useState(5)
    const [energiePhysique, setEnergiePhysique] = useState(5)
    const [energieMentale, setEnergieMentale] = useState(5)

    useEffect(() => {
        // refresh calcul de la proposition
        //1. récupérer valeurs
        let activitesPossibles = [];

        //2. comparer avec donnes de lstActivites
        lstActivites.forEach((activite) => {
            if (activite.duree_min <= duree) {
                var val = 10 - Math.abs(activite.duree_max/10 - duree/10)
                val += (10 - Math.abs(constructif - activite.constructif))
                    + (10 - Math.abs(defoulement - activite.defoulement))
                    + (10 - Math.abs(relaxation - activite.relaxation))
                    + (10 - Math.abs(energiePhysique - activite.energie_physique))
                    + (10 - Math.abs(energieMentale - activite.energie_mentale))
                var activiteRes = {};
                activiteRes.titre = activite.titre
                activiteRes.valAppropriee = val
                activitesPossibles.push(activiteRes);
            }
        });

        activitesPossibles.sort((a, b) => b.valAppropriee - a.valAppropriee);
        activitesPossibles = activitesPossibles.slice(0,4)

        //3. mettre els 3 premiers dans une chaine de caractère et afficher
        const listLignes = activitesPossibles.map((activite) =>
            <li key={activite.titre}>
                {activite.titre} : {activite.valAppropriee}
            </li>
        );
        setResultat(listLignes);
    }, [duree, constructif, defoulement, relaxation, energiePhysique, energieMentale])
    
    function gererDuree(e) {
        setDuree(e.target.value)
    }
    
    function gererConstructif(e) {
        setConstructif(e.target.value)
    }
    
    function gererDefoulement(e) {
        setDefoulement(e.target.value)
    }
    
    function gererRelaxation(e) {
        setRelaxation(e.target.value)
    }
    
    function gererEnergiePhysique(e) {
        setEnergiePhysique(e.target.value)
    }
    
    function gererEnergieMentale(e) {
        setEnergieMentale(e.target.value)
    }
    
    return (
        <div>
         {resultat}
            <form>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                    <span>
                        Temps dispo (min) :
                        <input
                        type="text"
                        id="dureeMin"
                        maxLength={3}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        onChange={gererDuree}
                        value={duree}
                        />
                    </span>
                </div>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                    <span>
                    constructif :
                        <input
                        type="text"
                        id="constructif"
                        maxLength={2}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        onChange={gererConstructif}
                        value={constructif}
                        />
                    </span>
                </div>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                    <span>
                    envie de défoulement :
                        <input
                        type="text"
                        id="defoulement"
                        maxLength={2}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        onChange={gererDefoulement}
                        value={defoulement}
                        />
                    </span>
                </div>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                    <span>
                    envie de relaxation :
                        <input
                        type="text"
                        id="relaxation"
                        maxLength={2}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        onChange={gererRelaxation}
                        value={relaxation}
                        />
                    </span>
                </div>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                    <span>
                    Energie physique :
                        <input
                        type="text"
                        id="energiePhysique"
                        maxLength={2}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        onChange={gererEnergiePhysique}
                        value={energiePhysique}
                        />
                    </span>
                </div>
                <div style={{ padding: '5px 15px 5px 15px' }}>
                    <span>
                    Energie Mentale :
                        <input
                        type="text"
                        id="energieMentale"
                        maxLength={2}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        onChange={gererEnergieMentale}
                        value={energieMentale}
                        />
                    </span>
                </div>
            </form>
            </div>
  )
}

export default Saisie