import React, {Component} from 'react';
import './App.css';

import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./components/footer";
import dummyText from "./DummyText"

class App extends Component {
  render() {
    return(
      <div className="App">
        <Navbar />
        <Section
          title="Aktuality"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Tréningové centrum"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Foto Galéria"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="O Nas"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Kontakt"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
        <Footer />
        </div>
    );
  }
}

export default App;
