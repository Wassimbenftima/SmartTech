import React from "react";
import Footer from "../footer/Footer";
import { Container, Col, Row } from "react-bootstrap";

function Achat() {
  return (
    <div>
      <h1> COMMENT ACHETER?</h1>
      <h2> TROUVER LE TELEPHONE QUI VOUS CONVIENT</h2>
      <p>
        {" "}
        Pour trouver le téléphone que vous cherchez, vous pouvez utiliser
        l'option «Recherche» en haut de la page et entrer le nom (par exemple:
        Samsu <br />
        Lumia 720, etc.) Vous pouvez également choisir parmi les Marques dans le
        menu de gauche ou des Catégories dans le menu supérieur.. <br />
        Si vous êtes toujours à la recherche d'un téléphone qui convient à vos
        normes, notre «Recherche avancée» est votre outil. Ici vous avez
        l'option de choisir <br />
        toutes les caractéristiques qui vous sont importantes chez un téléphone
      </p>
      <h4> SVous l'avez trouvé! Super! Aller à l'étape suivante!</h4>
      <h2> PASSER UNE COMMANDE</h2>
      <p>
        {" "}
        Vous ne savez pas si nous avons le téléphone en stock ou pas?! Si vous
        voyez chariot vert et un gros bouton en disant «Ajouter au panier» cela
        signifie que <br />
        nous l'avons bien en stock! Pour continuer, appuyez sur le bouton
        «Ajouter au panier». Le processus de paiement commence et vous êtes à la
        1ère étape.
      </p>
      <Container>
        <Col>
          <Row>
            <h1> ETAPE1.</h1>
            <h1> 01</h1>
            <p>
              {" "}
              Vous pouvez changer la quantité (si vous désirez), sélectionner
              votre pays dans un menu <br />
              déroulant et sélectionner un paquet d'assurance (si vous désirez).
              Le montant total que vous <br />
              voyez est en effet total. Il n'y a pas de coûts cachés (pas
              d'impôts, pas de frais de douane). Si
              <br />
              vous aimez ce que vous voyez passer à l'étape suivante en appuyant
              sur CHECKOUT.
            </p>
          </Row>
          <Row>
            <h1> ETAPE2.</h1>
            <h1> 02</h1>
            <p>
              {" "}
              Si vous êtes un Nouveau client, vous devez entrer toutes vos
              données, choisir le mode de <br />
              paiement, sélectionner «J'accepte les conditions générales» et
              finaliser la commande en <br />
              appuyant sur «Finir l'ordre».
            </p>

            <p>
              Si vous êtes un Ancien client, choisissez l'option «Client
              récurrent», entrez votre nom <br />
              d'utilisateur (adresse email) et votre mot de passe, appuyez sur
              «Connexion» et toutes les <br />
              données précédemment entrées seront affichées. Choisissez la
              méthode de paiement,
              <br />
              sélectionnez «J'accepte les termes et conditions» et finalisez la
              commande en appuyant sur <br />
              «Finir l'ordre».
            </p>
          </Row>
          <Row>
            <h1> ETAPE3. </h1>
            <h1> 03</h1>
            <p>
              {" "}
              Si vous choisissez le Virement bancaire comme mode de paiement, ça
              y est! Notre équipe <br />
              service client vous fera parvenir dans 24 heures les instructions
              de paiement que vous pouvez <br />
              utiliser pour effectuer le paiement. Dès que nous recevons le
              montant, la commande vous sera <br />
              envoyée.
            </p>
            <p>
              {" "}
              Si vous choisissez PayPal comme méthode de paiement vous vous
              trouverez redirigé vers <br />
              la page de vente sécurisée de PayPal. Vous ne devez pas être
              membre pour pouvoir effectuer le <br />
              paiement. Tout ce que vous devez faire c'est d'entrer vos données
              de carte de crédit et <br />
              d'effectuer le paiement. Une fois le paiement enregistré et votre
              commande traitée, nous vous <br />
              contacterons pour confirmer la commande et pour vous l'envoyer.
              <br />
              <strong> C'est tout!</strong>{" "}
            </p>
          </Row>
        </Col>
      </Container>
      <div>
        <h4> COMMENT NOUS TRAITONS VOTRE COMMANDE</h4>
        <p>
          {" "}
          Lorsque vous avez terminé votre commande, la première chose que nous
          ferons c'est de vérifier vos données et de réserver les marchandises
          pour vous.
          <br />
          Nous demandons des documents supplémentaires si besoin et nous les
          validons. Au cas de commande payée par virement bancaire nous envoyons
          les <br />
          instructions de paiement.
          <br />
          Quand tout a été vérifié et la commande a été payée, l'entrepôt prend
          le relai et emballe votre appareil. L’entrepôt passe votre colis au
          service courrier (avant <br />
          midi) et plus tard dans la journée, ils attribuent un numéro de suivi.
        </p>
      </div>

      <Container>
        <Row>
          <Col>
            <i className="fas fa-clipboard" />
            <span> commandé</span>
          </Col>
          <Col>
            <i className="fas fa-arrow-circle-right" />
          </Col>
          <Col>
            <i className="fas fa-file-invoice" />

            <span> Traitement des commandes </span>
          </Col>
          <Col>
            <i className="fas fa-arrow-circle-right" />
          </Col>
          <Col>
            <i className="fas fa-box-open"></i>
            <span> Prèt pour l'envoi</span>
          </Col>
          <Col>
            <i className="fas fa-arrow-circle-right"></i>
          </Col>

          <Col>
            <i className="fas fa-truck-moving"></i>
            <span> Expédiée</span>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
export default Achat;
