import Home from "./Home";
import Aboutus from "./Aboutus";
import { Routes, Route} from "react-router-dom";
import Review from "./Review";
import Blog from "./Blog";
import Gallery from "./Gallery";
function App() {
  return(
    <>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/Aboutus" element={<Aboutus/>}></Route>
        <Route path="/Review" element={<Review/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
      </Routes>
    </>
  )
}
export default App;