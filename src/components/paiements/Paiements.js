import React from 'react'
import { Container,Col,Row} from 'react-bootstrap'

 function Paiements() {
    return (
        <div>
            <h1> Modes de paiement</h1>
            <h2> Pour le moment nous avons 3 modes de paiement:</h2>
            <ol>
                <li> Virement bancaire,</li>
                <li> Payer avec un compte PayPal et</li>
                <li> Payer par carte de débit ou carte de crédit.</li>
            </ol>
            <Container>
                  <Col>
                  <Row>
                      <h1> 1. LE VIREMENT BANCAIRE</h1>
                      <p> Le Virement bancaire est un mode de paiement que vous pouvez faire hors ligne. Il implique <br/>
                       le transfert de fonds à partir de votre compte bancaire (Euro) sur le compte bancaire de  <br/>
                       MobileShop. Les coordonnées bancaires de MobileShop vous sont envoyées après avoir <br/>
                        validé votre commande. Alors vous pouvez effectuer le paiement dans votre banque ou en <br/>
                         utilisant votre système e-banking (si vous en avez un). </p>
                         <img src="https://selectra.info/sites/default/files/styles/article_hero/public/field/image/comment-faire-virement.png?itok=FO9gR9C7" alt="virement bancaire"/>
                         
                        </Row>
                        <Row>
                       <h1> 2.PAYER AVEC UN COMPTE PAYPAL</h1>
                       <p> Payer avec un compte PayPal est l'un des moyens de paiement le plus largement accepté sur Internet grace à son système <br/>
                        sophistiqué de prévention de la fraude. Lorsque vous êtes redirigé vers la page de PayPal veuillez choisir la première option et <br/>
                         entrer votre adresse e-mail et votre mot de passe afin de vous connecter à votre compte PP où vous pouvez effectuer votre <br/>
                          paiement.</p>
                          <img src="https://www.capitaine-banque.com/wp-content/uploads/2016/09/logo-paypal.png" alt="compte paypal"/>

                       </Row>
                       <Row>
                           <h1> 3.PAYING WITH MASTERCARD /VISA CARD</h1>
                           <p> Paying with PayPal account is one of the most widely accepted ways to pay on the Internet because of its sophisticated fraud <br/>
                            prevention system. When you are redirected to PayPal’s page you choose first option and enter email and password to log in to <br/>
                             your PP account where you finish your payment.</p>
                             <img src="https://w7.pngwing.com/pngs/117/675/png-transparent-visa-and-mastercard-ads-mastercard-credit-card-american-express-visa-debit-card-mastercard-text-payment-logo.png" alt="masterCard et visaCard"/>
                       </Row>
                       </Col>
                       </Container>
            
        </div>
    )
}
export default Paiements