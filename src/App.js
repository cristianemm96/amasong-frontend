import { Header } from "./Components/Header/Header";
import { RoutesComp } from "./Routes/Routes";
import { Footer } from "./Components/Footer/Footer";
import './index.css'
function App() {
  return (
    <>
    <div className="appContainer">
      <Header/>
      <RoutesComp/>
      <Footer />
    </div>
    </>
  );
}

export default App;
