import React, { Component} from "react";
//import NavbarComp from './Components/NavbarComp'; 
//import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import { faMapMarkerAlt, faHashtag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import delhiData from './delhi.json';
import { Link } from "react-router-dom";

class delhi extends Component{
    state = {
        search: ""
      };
    
      renderdelhiData = delhiData => {
        //const { search } = this.state;
       // var breed = delhiData.breed.toLowerCase();
    return(
        <div className="col-sm-4">
                    <div className="card">
                        {/* ADD IMAGE HERE*/ }
                        <img className="card-img-top" src={delhiData.image} alt=""/>
                        <div className="card-body">
                             {/* Add  Name here in Card title*/}
                            <h5 className="card-title">{delhiData.name}</h5>
                            <p className="card-text">
                                {/* Add  Breed and age here*/}
                                <p><FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>&nbsp;{delhiData.breed}, {delhiData.age}</p>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;{delhiData.location}</p></p>
                                <Link to="/adopt" className="btn btn-success">Adopt</Link>
                        </div>
                    </div>
        </div>
    )
};

onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredData = delhiData.filter(data=> {
      return data.breed.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return(
          <div>
            <center>
              <div className="searchBar">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <input
                    type="text"
                    className="inputField"
                  placeholder="Find your breed"
                  onChange={this.onchange}
                />
              </div>
              </center>
              <div className="container">
            <div className="row">
              {filteredData.map(breed => {
                return this.renderdelhiData(breed);
              })}
            </div>
            </div>
        </div>
    )
}
}
export default delhi;