import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import UpcomingEventsPage from "./UpcomingEvents/UpcomingEventsPage"; // eslint-disable-line import/no-named-as-default

function App() {
  return (
    <div className="container-fluid content-center">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/upcoming-events" component={UpcomingEventsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
