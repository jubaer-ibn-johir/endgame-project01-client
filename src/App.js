import "./App.css";
import Declarative from "./components/Pages/Declarative";
import Home from "./components/Pages/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import SimpleComponents from "./components/Pages/SimpleComponents";
import Stateful from "./components/Pages/Stateful";
import Application from "./components/Pages/Application";
import External from "./components/Pages/External ";
import UperFooter from "./components/Pages/UperFooter";

function App() {
  return (
    <div>
      <Navbar>
        <Home></Home>
        <Declarative></Declarative>
        <SimpleComponents></SimpleComponents>
        <Stateful></Stateful>
        <Application></Application>
        <External></External>
        <UperFooter></UperFooter>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
