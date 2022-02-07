import Massage from "../MassageComponent/Massage";
import Name from "../NameComponent/name";
import "./pagesCSS.css";

const Home = () => {
  return (
    <div className="mainInfo">
      <h1>Home Page</h1>
      <Massage />
      <Name />
    </div>
  );
};

export default Home;
