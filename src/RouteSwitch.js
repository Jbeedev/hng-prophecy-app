import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Navbar";
import Home from "./pages/Home/home";
import January from "./component/Prophecy/Details/January"
import February from "./component/Prophecy/Details/February"
import March from "./component/Prophecy/Details/March"
import April from "./component/Prophecy/Details/April"
import May from "./component/Prophecy/Details/May"
import June from "./component/Prophecy/Details/June"
import July from "./component/Prophecy/Details/July"
import August from "./component/Prophecy/Details/August"
import September from "./component/Prophecy/Details/September"
import October from "./component/Prophecy/Details/October"
import November from "./component/Prophecy/Details/November"
import December from "./component/Prophecy/Details/December"

const RouteSwitch = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/jan" element={<January />} />
        <Route path="/details/feb" element={<February />} />
        <Route path="/details/mar" element={<March />} />
        <Route path="/details/apr" element={<April />} />
        <Route path="/details/may" element={<May />} />
        <Route path="/details/jun" element={<June />} />
        <Route path="/details/jul" element={<July />} />
        <Route path="/details/aug" element={<August />} />
        <Route path="/details/sep" element={<September />} />
        <Route path="/details/oct" element={<October />} />
        <Route path="/details/nov" element={<November />} />
        <Route path="/details/dec" element={<December />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouteSwitch;
