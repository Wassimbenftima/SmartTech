import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Footer.css";

 


function Footer() {
  return (
    <div className="foter">
      <Container className="footer">
        <Row>
          <Col sm className="part1">
            <h1> SmartTech</h1>
            <h4 className="mod-title"> Modalités de paiment</h4>
            <div className="imgs">
              <img
                className="pay-img"
                src="https://images.mobileshop.eu/payment/bank-transfer.png"
                alt="transfer-bank"
              />
              <img
                className="pay-img"
                src="https://images.mobileshop.eu/payment/visa.png"
                alt="visa"
              />
              <img
                className="pay-img"
                src="https://images.mobileshop.eu/payment/mastercard.png"
                alt="mastercard"
              />
              <br />

              <img
                className="pay-img"
                src="https://images.mobileshop.eu/payment/paypal.png"
                alt="paypal"
              />
              <img
                className="pay-img"
                src="https://images.mobileshop.eu/payment/cache.png"
                alt="cache-payement"
              />
              <img
                className="pay-img"
                src="https://images.mobileshop.eu/payment/card.png"
                alt="payement-card"
              />
            </div>
          </Col>
          <Col sm className="part2">
            <h3 className="serv-titre"> SOCIETE</h3>
            <ul className="serv">
              <Link to="/users/footer/aprops">
                <li>
                  <a className="footer-link" href="/users/footer/aprops">A Propos de SmartTech </a>
                </li>
              </Link>
              <Link to="/users/footer/contacts">
                <li>
                   <a className="footer-link" href="/users/footer/contacts">
                    Contacts
                  </a>
                </li>
              </Link>
              <Link to="/users/footer/confidentialites">
                <li>
                  
                  <a className="footer-link" href="users/footer/confidentialites" >
                
                    Politiques et confidentialités
                  </a>
                </li>
              </Link>
            </ul>
          </Col>
          <Col sm className="part3">
            <h3 className="prop-titre"> ASSISTANCE</h3>
            <ul className="prop">
              <Link to="/users/footer/achat">
                <li>
                  {" "}
                  <a className="footer-link" href="/users/footer/achat">
                    {" "}
                    Comment Acheter
                  </a>
                </li>
              </Link>
              <Link to="/users/footer/paiements">
                <li>
                  {" "}
                  <a className="footer-link" href="/users/footer/paiements">
                    {" "}
                    Modalités de paiement
                  </a>
                </li>
              </Link>
              <Link to="/users/footer/faq">
                <li>
                  {" "}
                  <a className="footer-link" href="/users/footer/faq">
                 
                    FAQ
                  </a>
                </li>
              </Link>
              <Link to="/users/footer/annulation">
                <li>
             
                  <a className="footer-link" href="/users/footer/annulation">
                    Annulation et Retour
                  </a>
                </li>
              </Link>
            </ul>
          </Col>
          <Col sm className=" part4">
            <h3 className="cont-titre"> Contacts</h3>
            <ul className=" cont-list">
              <li>Service clientèle</li>
              <li>
                {" "}
                <a href="tel: +216 29 851 745 ">+216 29 851 745 </a>
              </li>
            </ul>
            <ul className="email-list">
              <li>Email</li>
              <li>
                {" "}
                <a href="mailto:SmartTech.tn@gmail.com">
                  SmartTech.tn@gmail.com{" "}
                </a>
              </li>
            </ul>

            <ul>
              <li>Réseaux sociaux</li>
<li><i className="fab fa-facebook" />
              <i className="fab fa-youtube" />
              <i className="fab fa-instagram" /></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        
   
          Copyright <i className="fas fa-copyright"/> {new Date().getFullYear()} SmartTech. Tous les droits réservés
          
          
      
       
      
      </div>
    </div>
  );
}
export default Footer;
