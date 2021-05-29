import React, { Component} from "react";
//import NavbarComp from './Components/NavbarComp'; 
//import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import { faMapMarkerAlt, faHashtag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chandigarhData from './chandigarh.json';
import { Link } from "react-router-dom";

class chandigarh extends Component{
    state = {
        search: ""
      };
    
      renderchandigarhData = chandigarhData => {
        //const { search } = this.state;
       // var breed = chandigarhData.breed.toLowerCase();
    return(
        <div className="col-sm-4">
                    <div className="card">
                        {/* ADD IMAGE HERE*/ }
                        <img className="card-img-top" src={chandigarhData.image} alt=""/>
                        <div className="card-body">
                             {/* Add  Name here in Card title*/}
                            <h5 className="card-title">{chandigarhData.name}</h5>
                            <p className="card-text">
                                {/* Add  Breed and age here*/}
                                <p><FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>&nbsp;{chandigarhData.breed}, {chandigarhData.age}</p>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;{chandigarhData.location}</p></p>
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
    const filteredData = chandigarhData.filter(data=> {
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
                return this.renderchandigarhData(breed);
              })}
            </div>
            </div>
        </div>
    )
}
}
export default chandigarh;