import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div> Application Meteo
            <button className="ui primary button">
                Save
            </button>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);