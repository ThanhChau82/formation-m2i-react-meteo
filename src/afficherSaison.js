// Créer un composant qui reçoit la latitude, puis affiche la saison.
// Ce composant sera plus tard intégré dans le composant principal.

import React from 'react';

const AfficherSaison = (props) => {
    console.log(props);    
    var month = new Date().getMonth() + 1;
    console.log(month);
    let saison = getSaison(props.latitude, month);

    return (
        <div>
            <div>Latitude : { props.latitude }</div>
            <div>Longitude : { props.longitude }</div>
            <div>Mois : {month}</div>
            <div>Saison : {saison}</div>   
        </div> 
    )
}

const getSaison = (latitude, mois) => {
    if(mois > 3 && mois < 10) {
        return latitude > 0 ? "Saison chaude" : "Saison froide";
    } else {
        return latitude > 0 ? "Saison froide" : "Saison chaude";
    }
}

export default AfficherSaison;