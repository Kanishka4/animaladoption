//import logo from './logo.svg';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Components/AboutUs';
import bangalore from './Components/Cards/bangalore';
import NavbarComp from './Components/NavbarComp';
import pune from './Components/Cards/pune';
import delhi from './Components/Cards/delhi';
import chandigarh from './Components/Cards/chandigarh';
import donate from './Components/donate';
//import SearchData from './Components/Search';
import './Components/title.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import './Components/donate.css';
import { Component } from 'react';
import formPopUp from './Components/Cards/formPopUp';
import FooterComp from './Components/footerComp';


class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "React",
      isUserValid: true
    };
  }
  render(){
  return (
    <div>
    <h1 className="titleText">Animal Adoption</h1>
    <NavbarComp/>
    <Switch>
    <Route exact path="/" render={() => {
                    return (
                      this.state.isUserValid ?
                      <Redirect to="/home" /> :
                      <Redirect to="/home" /> 
                    )
                }}
              />
    <Route path="/home" component={AboutUs}></Route>
      <Route path="/bangalore" component={bangalore}></Route>
      <Route path="/pune" component={pune}></Route>
      <Route path="/delhi" component={delhi}></Route>
      <Route path="/chandigarh" component={chandigarh}></Route>
      <Route path="/donate" component={donate}></Route>
      <Route path="/adopt" component={formPopUp}></Route>
    </Switch>
    <FooterComp/>
    </div>
  );
}
}
export default App;
