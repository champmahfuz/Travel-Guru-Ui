import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Albums from './Pages/Home/Albums/Albums';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import AddService from './Pages/AddService/AddService';
import Register from './Pages/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs';
import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/albums">
              <Albums></Albums>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
