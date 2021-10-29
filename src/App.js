import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Middle from './Components/Middle/Middle';
import Top from './Components/Banner/Banner';
import Login from './Components/LogIn/Login';
import AuthProvider from './Context/AuthProvider';
import Doctor from './Components/Doctor/Doctor';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/banner">
          <Banner></Banner>
          </Route>
          <Route path="/middle/:serviceid">
          <Middle></Middle>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <PrivateRoute path="/doctor">
          <Doctor></Doctor>
          </PrivateRoute>
          <Route path="/services">
          <Services></Services>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
