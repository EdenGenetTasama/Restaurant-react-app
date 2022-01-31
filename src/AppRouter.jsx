import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/PagesComponents/Home";
import Menu from "./component/PagesComponents/Menu";
import Orders from "./component/PagesComponents/Orders";
import Header from "./component/HeaderComponent/Header";
import Navbar from "./component/NavbarComponent/Navbar";
import Footer from "./component/FooterComponent/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
