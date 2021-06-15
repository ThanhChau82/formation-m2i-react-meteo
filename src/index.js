import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{ // Créer le composant via class method.

    constructor(props){
      super(props);
  
      this.state = { latitude : 0 };
  
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({ latitude : position.coords.latitude}) ;
        },
        (err) => { console.log(err) }
      )
    }
  
  
    render(){
      return (
        <div>
          latitude : { this.state.latitude }
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

