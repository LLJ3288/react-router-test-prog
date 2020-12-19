import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import LookAtUs from './components/LookAtUs';
import NavBarPage from './NavBarPage'

class Routes extends Component{
    render(){ 
        return (
            
            <Router>
                <NavBarPage />
                <div>
                <hr/>
                <Route name="HomePage" exact path="/" component={HomePage} /><b>*****</b>
                <Route name="MenuPage" path="/menu" component={MenuPage} /><b>*****</b>
                <Route name="AboutPage" path="/about" component={AboutPage} />
                <Route name="LookAtUs" path="/look" component={LookAtUs} />
            </div>
      </Router>
        
     );
    }
} 

export default Routes;