import "./app.scss";
import Home from "./pages/Home/Home";
import Topbar from "./components/Topbar/Topbar";

const App = () => {
  return (
    <div className="app">
      <Topbar></Topbar>
      <Home></Home>
    </div>
  );
};

export default App;
