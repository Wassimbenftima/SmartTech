import React,{Component} from 'react' ;
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Button , Nav,FormControl } from 'react-bootstrap' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faUser,faShoppingCart ,faSearch} from "@fortawesome/free-solid-svg-icons";
import './Navbarmenu.css'
import {Link} from 'react-router-dom';

class NavbarMenu extends Component {
  state={
    search:""
}
render(){
    return (        
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">SmartTech</Navbar.Brand>
  
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="mr-auto">
<FormControl  type="text" placeholder="rechercher" className="mr-sm-2" value={ this.state.search}

onChange={e=>(
this.setState(
{search:e.target.value

},
()=> this.props.filterdSmart(this.state.search)

))}/>
<Button variant="outline-info" className="search-btn"><FontAwesomeIcon icon={faSearch} /></Button>
</Nav>

 <Link to='/login'>
<Button variant="danger"><FontAwesomeIcon icon={faUser} />LogIn</Button>
</Link>
<Link to='/register'>
<Button variant="info" className="btn-inscription"> <FontAwesomeIcon icon={faUser} />Inscription</Button>
</Link>
<Button variant="success" className="btn-shopping"> <FontAwesomeIcon icon={faShoppingCart} /> 0.00TND
</Button>
</Navbar.Collapse>
</Navbar>



    )
}
}

export default NavbarMenu
