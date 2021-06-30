import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import Login from './components/Login';
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faKey, faListOl, faPencilAlt, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">RESTAURANT APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} /> HOME</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faListOl} /> LIST</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} /> CREATE</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} /> SEARCH</Link></Nav.Link>

              <Nav.Link href="#link"><Link to="/update">UPDATE</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link></Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/details">
          <RestaurantDetail />
        </Route>
        <Route path="/update /: id"
          render={props => (<RestaurantUpdate {...props} />)}
        >
          {/*  */}
        </Route> <Route path="/login"
          render={props => (<Login {...props} />)}
        >

        </Route>
        {/*  */}
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
