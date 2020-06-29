import React from "react";

import Navbar from "./components/NavbarMenu/NavbarMenu";

import Slider from "./components/Slider/Slider";
import Main from "./components/Main/Main";
import Phones from "./components/Phones/Phones";
import { phones } from "./components/Data/data";
import EditableTable from "./components/login/EditableTable";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ApropSmart from "./components/apropsmart/ApropSmart";
import Contacts from "./components/contacts/Contacts";
import Politiques from "./components/politiques/Politiques";
import Achat from "./components/achat/Achat";
import Paiments from "./components/paiements/Paiements";
import FAQ from "./components/faq/FAQ";
import Annulation from "./components/annulation/Annulation";

class App extends React.Component {
  state = {
    phonelist: phones,
    nameFilter: "",
  };
  filterdSmart = (x) => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
    this.setState({
      nameFilter: x,
      loading: true,
    });
  };
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                 
                  <Navbar  filterdSmart={this.filterdSmart} /> 
                  <Slider />
                  <Main />
                  <Phones
                    mobiles={this.state.phonelist.filter((el) =>
                      el.titre.toLowerCase().includes(this.state.nameFilter)
                    )}
                  />
                  <Phones
                    mobiles={this.state.phonelist.filter((el) =>
                      el.titre[0]
                        .toUpperCase()
                        .includes(this.state.nameFilter[0])
                    )}
                  />
                  <Footer />
                </>
              )}
            ></Route>

            <Route
              exact
              path="/tableau"
              render={(props) => <EditableTable />}
            ></Route>

            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            ></Route>
            <Route
              exact
              path="/register"
              render={(props) => <Register {...props} />}
            ></Route>
            <Route
              exact
              path="/users/footer/aprops"
              render={(props) => <ApropSmart {...props} />}
            ></Route>
            <Route
              exact
              path="/users/footer/contacts"
              render={(props) => <Contacts {...props} />}
            ></Route>
            <Route
              exact
              path="/users/footer/confidentialites"
              render={(props) => <Politiques {...props} />}
            ></Route>
            <Route
              exact
              path="/users/footer/achat"
              render={(props) => <Achat {...props} />}
            ></Route>
            <Route
              exact
              path="/users/footer/paiements"
              render={(props) => <Paiments {...props} />}
            ></Route>
            <Route
              exact
              path="/users/footer/faq"
              render={(props) => <FAQ {...props} />}
            ></Route>
            <Route
              exact
              path="/users/footer/annulation"
              render={(props) => <Annulation {...props} />}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
