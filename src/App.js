import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      {/**
       * Wrap Switch with AnimatePresence so framer-motion can detect route switches
       * and animate the behaivor accordingly. Add key to switch using useLocation hook.
       * Use exitBeforeEnter prop to animate page only once component has fully exited.
       * Otherwise show & exit animations will happen simultanously between page switches.
       */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={AboutMe} />
          <Route path='/work' exact component={OurWork} />
          <Route path='/work/:id' component={MovieDetails} />
          <Route path='/contact' component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
