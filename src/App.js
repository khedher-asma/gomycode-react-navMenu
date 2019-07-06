import React from 'react';
import './App.css';
import { NavLink, Link, Route } from 'react-router-dom';

const Home = () => <h1></h1>
const Service = ({ match }) => <h1></h1>
const Services = ({ match }) => (
  <div className="services">
    <ul>
      <li>
        <NavLink to={`${match.url}/entrepreneur`} className="default-style" activeClassName="active-style">For entrepreneur</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/students`}className="default-style" activeClassName="active-style">For students</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/hobbyists`}className="default-style" activeClassName="active-style">For hobbyists</NavLink>
      </li>
    </ul>
    <div>
      <Route path={`${match.path}/:id`} component={Service} />
    </div>

  </div>
)
const Contact = () => <h1></h1>
// const Users = () => (
//   <div>
//     <Link to="/users/1" >User1</Link><br />
//     <Link to="/users/2" >User2</Link><br />
//     <Link to="/users/3" >User3</Link>

//   </div>
// )
// const User = (props) => (

//   <h1>Hello i am user number {props.match.params.id} </h1>
// )
function App() {
  return (

    <div className="App">
      <nav>
        <ul className="d-flex align-items-center">
          <li className="mx-1 mt-2">
            <NavLink to="/Home" className="default-style" activeClassName="active-style">Home</NavLink>
          </li>
          <li className="mx-1 mt-2">
            <NavLink to="/services" className="default-style" activeClassName="active-style">Services</NavLink>
          </li>
          <li className="mx-1 mt-2">
            <NavLink to="/contact" className="default-style" activeClassName="active-style">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <Route path="/Home" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
