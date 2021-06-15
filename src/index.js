import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{ // Créer le composant via class method.

    constructor(props){
      super(props);
  
      this.state = { latitude : 0, messageErreur : '' };
  
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({ latitude : position.coords.latitude}) ;

        },
        (err) => { 
            console.log(err);
            this.setState({messageErreur : err.message});
        }
      )
    }  
  
    render(){      
        if(this.state.latitude != 0 && this.state.messageErreur == '') {
            return <div>Latitude : { this.state.latitude }</div>
        }

        if(this.state.latitude == 0 && this.state.messageErreur != '') {
            return <div>Erreur : { this.state.messageErreur }</div>
        }
    
        return <div>"Encours de chargement"</div>      
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

