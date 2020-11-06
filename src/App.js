import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

  }

  copyAndPaste = () => {

  }

  render() {
    return (
      <div className="App">
        <div className="App-main-div">

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
                value={this.state.value}
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
                  onClick={this.copyAndPaste}
                  className="SubmitButton"
                  type="submit"
                  >
                  Submit
                </button>
              </div>
            </div>

            <div className="Answer">

              <div className="TranslatedText-div">
              <p
                className="TranslatedText"
              >
              Ipsum
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
