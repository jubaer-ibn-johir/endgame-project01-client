import "./App.css";
import Declarative from "./components/Pages/Declarative";
import Home from "./components/Pages/Home";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Home></Home>
        <Declarative></Declarative>
      </Navbar>

    </div>
  );
}

export default App;
