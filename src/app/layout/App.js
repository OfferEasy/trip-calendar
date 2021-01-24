import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TripList from "../../components/trip/tripList/tripList";
import AddTrip from "../../components/trip/addTrip/addTrip";
import NavMenu from "../nav/menu";
import "antd/dist/antd.css";
import '../../index.css';
import { Layout } from "antd";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
          <Layout className="layout">
            <Router>
                <NavMenu/>
                <Switch>
                  <Route exact path="/" render={(props) => (
                    <Content style={{ padding: '0 50px' }}>
                      <TripList
                        {...props}
                      />
                    </Content>
                  )}>
                  </Route>
                  <Route path="/tripModify" render={(props) => (
                    <Content style={{ padding: '0 50px' }}>
                      <AddTrip
                        {...props}
                      />
                    </Content>
                  )}>
                  </Route>
                </Switch>
            </Router>
          </Layout>
      </div>
    )
  }
}

export default App;
