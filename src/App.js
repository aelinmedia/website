import "./index.css";
import EndSection from "./pages/endsection";
import FeaturedWork from "./pages/featuredwork";
import MainPage from "./pages/landingpage";
import ServicesPage from "./pages/servicespage";
function App() {
  return (
    <div>
      <MainPage />
      {/* <FeaturedWork /> */}
      <ServicesPage />
      <EndSection />
    </div>
  );
}

export default App;
