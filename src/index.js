import React from 'react';
import ReactDOM from 'react-dom';
import AfficherSaison from './afficherSaison';

class App extends React.Component{ // Créer le composant via class method.
    state = { latitude : 0, messageErreur : '', longitude : 0};

    constructor(props){
      super(props);
    } 

    componentDidMount() {
        // Récupérer la position de l'utilisateur.
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
    }

    render(){
        // Quand l'utilisateur accepte de donner sa position
        if(this.state.latitude != 0 && this.state.messageErreur == '') { 
            return (
                <AfficherSaison latitude={this.state.latitude} longitude={this.state.longitude}></AfficherSaison>
            )            
        }

        // Quand l'utilisateur refuse de donner sa position
        if(this.state.latitude == 0 && this.state.messageErreur != '') {
            return (
                <div>
                    <div>Erreur : { this.state.messageErreur }</div>
                </div>
            )
        }
    
        // Quand le calcul de position est en train de faire.
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

