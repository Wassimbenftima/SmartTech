import React, { Component } from 'react'
import { Nav,FormControl,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import './Search.css'

export default class Search extends Component {
    state={
        search:""
    }

    render() {
        return (
            <div className="search">
                  <Nav className="mr-auto">
    <FormControl  type="text" placeholder="rechercher" className="mr-sm-2" value={ this.state.search}
    
    onChange={e=>(
        this.setState(
            {search:e.target.value

        },
        ()=> this.props.filterdSmart(this.state.search)


        )
    )
    }
    />
    <Button variant="outline-info" className="search-btn"><FontAwesomeIcon icon={faSearch} /></Button>
   
    
    </Nav>

</div>

                
         
        )
    }
}
