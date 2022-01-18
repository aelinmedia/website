import "./index.css";
import EndSection from "./pages/endsection";
import FeaturedWork from "./pages/featuredwork";
import React from "react";
import MainPage from "./pages/landingpage";
import ServicesPage from "./pages/servicespage";
// import createScrollSnap from 'scroll-snap'

class App extends React.Component {
  container = React.createRef()

  // bindScrollSnap() {
  //   const element = this.container.current
  //   createScrollSnap(element, {
  //     snapDestinationY: '110%',
  //   }, () => console.log('snapped'))
  // }

  // componentDidMount() {
  //   this.bindScrollSnap()
  // }
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
