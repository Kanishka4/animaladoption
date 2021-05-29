import React, { Component} from "react";
//import NavbarComp from './Components/NavbarComp'; 
//import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import { faMapMarkerAlt, faHashtag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bangaloreData from './bangalore.json';
import { Link } from "react-router-dom";

class bangalore extends Component{
    state = {
        search: ""
      };
    
      renderBangaloreData = bangaloreData => {
        //const { search } = this.state;
       // var breed = bangaloreData.breed.toLowerCase();

       /*if( search == "" && bangalore.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/
    return(
        <div className="col-sm-4">
                    <div className="card">
                        {/* ADD IMAGE HERE*/ }
                        <img className="card-img-top" src={bangaloreData.image} alt=""/>
                        <div className="card-body">
                             {/* Add  Name here in Card title*/}
                            <h5 className="card-title">{bangaloreData.name}</h5>
                            <p className="card-text">
                                {/* Add  Breed and age here*/}
                                <p><FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>&nbsp;{bangaloreData.breed}, {bangaloreData.age}</p>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;{bangaloreData.location}</p></p>
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
    const filteredData = bangaloreData.filter(data=> {
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
                return this.renderBangaloreData(breed);
              })}
            </div>
            </div>
        </div>
    )
}
}
export default bangalore;