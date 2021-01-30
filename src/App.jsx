import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/pages/NotFound/NotFound';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';

const App = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setWindowHeight(window.innerHeight)
    );
  }, []);

  return (
    <div className="App" style={{ minHeight: `${windowHeight}px` }}>
      <Header />

      <main>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/single-product" />}
          />
          <Route path="/single-product" component={SingleProduct} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>

      <Footer />
    </div>
  );
};

export default App;
