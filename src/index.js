import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{ // Créer le composant via class method.
    
    constructor(props){
      super(props);
  
      // Initialiser le state du composant.
      this.state = { latitude : 0, messageErreur : '', longitude : 0}; 
  
      // Afficher la position de l'utilisateur.
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({ latitude : position.coords.latitude, longitude : position.coords.longitude});
        },
        (err) => { 
            console.log(err);
            this.setState({messageErreur : err.message});
        }
      )

      /*var date = new Date();
      console.log(date);
      var month = date.getMonth() + 1;
      console.log(month);
      this.setState({mois : month});
      console.log(this.state.mois);*/
    }  

    getSaison(latitude, mois) {
        if(mois > 3 && mois < 10) {
            return latitude > 0 ? "Saison chaude" : "Saison froide";
        } else {
            return latitude > 0 ? "Saison froide" : "Saison chaude";
        }
    }
  
    render(){    
        if(this.state.latitude != 0 && this.state.messageErreur == '') {            
            var month = new Date().date.getMonth() + 1;
            let saison = this.getSaison(this.state.latitude, month);

            return (
                <div>
                    <div>Latitude : { this.state.latitude }</div>
                    <div>Longitude : { this.state.longitude }</div>
                    <div>Mois : {month}</div>
                    <div>Saison : {saison}</div>   
                </div>              
            )
        }

        if(this.state.latitude == 0 && this.state.messageErreur != '') {
            return (
                <div>
                    <div>Erreur : { this.state.messageErreur }</div>
                </div>
            )
        }
    
        return (
            <div>
                <div>"Encours de chargement"</div>
            </div>
        )     
    }
  }
  
  
  /*const App = () => {
    let latitude = 0;
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        latitude = position.coords.latitude;
      },
      (err) => { console.log(err) }
    )
    return (
      <div> latitude : { latitude }
        <button className="ui primary button">
          Save
        </button>
      </div>
    )
  }*/
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

