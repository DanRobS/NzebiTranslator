import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-main-div">

        <Navbar bg="dark" variant="dark" className="Navbar">
          <Navbar.Brand className="Navbar-Brand"
              href="#home">Online language translator</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="homeLink" href="#home">Home</Nav.Link>
            <NavDropdown title="Dictionaries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Nzebi">Nzebi</NavDropdown.Item>
              <NavDropdown.Item href="#Fang">Fang</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
          {/*H E A D E R*/}
          <div className="Heading">
            {/*Heading Title*/}
            <div className="Heading-title">
              <h1>Gabon language translator</h1>
            </div>

            {/*Heading restriction*/}
            <div className="Heading-description">
              <h3>An online tool to translate Gabon langagues using NPL</h3>
            </div>
          </div>

          {/*B O D Y*/}
          <div className="Body">
            <div className="TextInput-Section">
              <textarea
                className="TextArea"
                placeholder="Enter text"
                rows="10"
                cols="70">
              </textarea>
              <div className="Lng-Button-Area">
                <select className="selectTool">
                  <option value="Nzebi">Nzebi</option>
                  <option value="Fang">Fang</option>
                </select>
                <button
                  className="SubmitButton"
                  type="submit">
                  Submit
                </button>
              </div>
            </div>

            <div className="Answer">

              <div className="TranslatedText-div">
              <p className="TranslatedText">

              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
