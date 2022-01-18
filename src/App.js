import "./index.css";
import EndSection from "./pages/endsection";
import FeaturedWork from "./pages/featuredwork";
import React from "react";
import MainPage from "./pages/landingpage";
import ServicesPage from "./pages/servicespage";

class App extends React.Component {
  container = React.createRef()

  render() {
    return (
      <div id="container" ref={this.container}>
        <MainPage />
        <FeaturedWork />
        <ServicesPage />
        <EndSection />
      </div>
    );
  }
}

export default App;
