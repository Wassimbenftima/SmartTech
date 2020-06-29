import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Container, Col } from "react-bootstrap";
import "./Phones.css";

export default function Phones(props) {
  return (
    <div>
      <div className="sidenav">
        <h6> Fabricant</h6>
        <ul>
          <li>
            <input type="checkbox" id="phone1" name="phone1" value="phone1" />
            <label for="phone1"> SAMSUNG </label>
          </li>
          <li>
            <input type="checkbox" id="phone2" name="phone2" value="phone2" />
            <label for="phone2">HUAWEI </label>
          </li>
          <li>
            <input type="checkbox" id="phone3" name="phone3" value="phone3" />
            <label for="phone3"> LENOVO </label>
          </li>
          <li>
            <input type="checkbox" id="phone4" name="phone4" value="phone4" />
            <label for="phone4"> IPHONE </label>
          </li>
          <li>
            <input type="checkbox" id="phone5" name="phone5" value="phone5" />
            <label for="phone5"> OPPO </label>
          </li>
        </ul>
        <h6> Stockage</h6>
        <ul>
          <li>
            <input type="checkbox" id="phone6" name="phone6" value="phone6" />
            <label for="phone6">8 Go </label>
          </li>
          <li>
            <input type="checkbox" id="phone7" name="phone7" value="phone7" />
            <label for="phone7"> 16 Go </label>
          </li>
          <li>
            <input type="checkbox" id="phone8" name="phone8" value="phone8" />
            <label for="phone8"> 32 Go </label>
          </li>
          <li>
            <input type="checkbox" id="phone9" name="phone9" value="phone9" />
            <label for="phone9"> 64 Go </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone10"
              name="phone10"
              value="phone10"
            />
            <label for="phone10"> 128 Go </label>
          </li>
        </ul>
        <h6> RAM</h6>
        <ul>
          <li>
            <input
              type="checkbox"
              id="phone11"
              name="phone11"
              value="phone11"
            />
            <label for="phone11"> 1 Go </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone12"
              name="phone12"
              value="phone12"
            />
            <label for="phone12"> 2 Go </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone13"
              name="phone13"
              value="phone13"
            />
            <label for="phone13"> 3 Go </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone14"
              name="phone14"
              value="phone14"
            />
            <label for="phone14"> 4 Go </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone15"
              name="phone15"
              value="phone15"
            />
            <label for="phone15"> 6 Go </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone16"
              name="phone16"
              value="phone16"
            />
            <label for="phone16"> 8 Go </label>
          </li>
        </ul>
        <h6> Processeur</h6>
        <ul>
          <li>
            <input
              type="checkbox"
              id="phone17"
              name="phone17"
              value="phone17"
            />
            <label for="phone17"> Quad-Core </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone18"
              name="phone18"
              value="phone18"
            />
            <label for="phone18">Octa-Core </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone17"
              name="phone17"
              value="phone17"
            />
            <label for="phone17">Hexa-Core </label>
          </li>
        
        </ul>
      </div>

      <Container className="conta">
        <Row>
          {props.mobiles.map((el, key) => (
            <Col lg={3} md={6} key={key}>
              <Card
                border="light"
                className="item-card"
                style={{ width: "18rem" }}
                key={key}
              >
                <Card.Img variant="top" className="card-img" src={el.image} />
                <Card.Body>
                  <Card.Title className="card-titre"> {el.titre}</Card.Title>
                  <Card.Text className="card-desc"> {el.description}</Card.Text>
                  <Button variant="primary">{el.prix}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
