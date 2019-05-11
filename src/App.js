import React, {Component} from 'react';
import logo from './images/logo/logo.svg';
import './App.css';

import Navbar from "./components/navbar";
import Section from "./components/section";
import dummyText from "./DummyText"

class App extends Component {
  render() {
    return(
      <div className="App">
        <Navbar />
        <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
        </div>
    );
  }
}

export default App;
