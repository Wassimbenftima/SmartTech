import React from 'react'
import { Container ,Col,Row} from  'react-bootstrap'
import Footer from '../footer/Footer'

function Contacts() {
    return (
    <div>
            <Container>
                <Row>
                <Col sm > 
                <h1> Contacts</h1>
                <h3> Information Génerale:</h3>
                <p> Wassim <br/> Ben Ftima 28<br/> Tozeur 2260 <br/> Tunis</p> 
                </Col>
                <Col sm >
                    <h3> Soutien à la Clientèle:</h3>
                    <a href="mailto:SmartTech.tn@gmail.com"> SmartTech.tn@gmail.com</a>
                    <p> Tél: 29851745</p>
                    <h4> Du Lundi au Vendredi,</h4>
                    <p> de 08h30 à 14h30</p>
                </Col>
                <Col sm >
                    <h3> La gestion des Garanties:</h3>
                    <p> En ce qui concerne l'adresse postale correcte  <br/>
                    pour retourner la marchandise et le service après <br/>
                     vente veuillez contacter notre service à la clientèle sur:</p>
                     <a href="mailto:SmartTech.tn@gmail.com"> SmartTech.tn@gmail.com</a>

                </Col>
                </Row>
            </Container>
            <Footer/>
            </div>
            
    )
}

export default Contacts
