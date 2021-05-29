import {React} from 'react';
import './title.css';
import {Link} from 'react-router-dom';
import { faDonate, faHome,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComp = () =>{
    
    return(
            <div className="navbar navbar-sm sticky-top">
                <ul className="nav justify-content-center ">
                    
                    <li className="nav-item">
                        <Link className="nav-link " to="/animaladoption/">Home &nbsp;<FontAwesomeIcon icon={faHome} /></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link " to="/bangalore">Bangalore</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pune">Pune</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/delhi">Delhi</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chandigarh">Chandigarh</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/donate">Donate <FontAwesomeIcon icon={faDonate}></FontAwesomeIcon></Link>
                    </li>
                </ul>
            </div>
    );
};

export default NavbarComp;