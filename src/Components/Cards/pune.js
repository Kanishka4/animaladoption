import React, { Component} from "react";
//import NavbarComp from './Components/NavbarComp'; 
//import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import { faMapMarkerAlt, faHashtag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import puneData from './pune.json';
import { Link } from "react-router-dom";

class pune extends Component{
    state = {
        search: ""
      };
    
      renderpuneData = puneData => {
        //const { search } = this.state;
       // var breed = puneData.breed.toLowerCase();
    return(
        <div className="col-sm-4">
                    <div className="card">
                        {/* ADD IMAGE HERE*/ }
                        <img className="card-img-top" src={puneData.image} alt=""/>
                        <div className="card-body">
                             {/* Add  Name here in Card title*/}
                            <h5 className="card-title">{puneData.name}</h5>
                            <p className="card-text">
                                {/* Add  Breed and age here*/}
                                <p><FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>&nbsp;{puneData.breed}, {puneData.age}</p>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;{puneData.location}</p></p>
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
    const filteredData = puneData.filter(data=> {
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
                return this.renderpuneData(breed);
              })}
            </div>
            </div>
        </div>
    )
}
}
export default pune;