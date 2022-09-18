import './App.css';
import React from 'react';
import { Route , Link, Redirect } from 'react-router-dom'
import Discord from './views/home.js'



function App() {
        return (
            <div className="App">
                <Route exact path="/invite" component={() => {
                    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1004287257412370482&permissions=8&scope=bot%20applications.commands';
                    return null;
                }}/>
                <Route exact path="/" component={Discord}/>
            </div>
)


}

export default App;