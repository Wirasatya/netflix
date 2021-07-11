import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Topbar from "../../components/Topbar/Topbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Topbar></Topbar>
      <Featured></Featured>
      <List></List>
      <List></List>
      <List></List>
    </div>
  );
};

export default Home;
