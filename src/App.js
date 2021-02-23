import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route path='/work' exact component={OurWork} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/work/:id' component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
