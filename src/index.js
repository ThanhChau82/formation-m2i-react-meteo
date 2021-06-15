import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    let latitude = 0;
    window.navigator.geolocation.getCurrentPosition(        
        (position) => {
            console.log(position);
            latitude = position.coords.latitude;
        },
        (erreur) => {
            console.log(erreur);
        }
    );

    return (
        <div>
            Latitude : {latitude}
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);