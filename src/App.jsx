import React from 'react';
import { BrowserRouter, Match, Redirect } from 'react-router';
import HomeContainer from './HomeContainer';
import Embed from './Embed';
import Convert from './Convert';
import styles from './App.css';

const RedirectHome = () => (<Redirect to="/" />);
const App = () => (
  <BrowserRouter>
    <div className={styles.flexContainer}>
      <Match pattern="/" exactly component={HomeContainer} />
      <Match pattern="/convert" exactly component={RedirectHome} />
      <Match pattern="/convert/:value" component={Convert} />
      <Match pattern="/embed" exactly component={RedirectHome} />
      <Match pattern="/embed/:uri" component={Embed} />
    </div>
  </BrowserRouter>
);

export default App;
