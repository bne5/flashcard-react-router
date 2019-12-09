import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./views/NavBar";
import { Container, } from 'semantic-ui-react';
import Home from './views/Home';
import Card from './components/Card';
import AddCard from './views/AddCard';
import NoMatch from './components/NoMatch';
import DeleteCard from './views/DeleteCard';
import EditCard from './views/EditCard';
import ScoreCard from './views/ScoreCard';
import ViewCards from './views/ViewCards';

const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/Add" component={AddCard} />
        <Route exact path="/Delete" component={DeleteCard} />
        <Route exact path="/Edit" component={EditCard} />
        <Route exact path="/Score" component={ScoreCard} />
        <Route exact path="/View" component={ViewCards} />
        <Route component={NoMatch} />
    </Switch>
    </Container>
  </Fragment>
);

export default App;
