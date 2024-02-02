import Menu from "./AllComponent/Menu";
import About from "./Aboutus/About";
import Ralex from "./Aboutus/Ralex";
import Team from "./Aboutus/Team";
import './Aboutus/about.css';
import Member from "./AllComponent/Member";
import Footer from "./AllComponent/Footer";

function Aboutus() {
    return(
        <>
            <Menu/>
            <About/>
            <Ralex/>
            <Team/>
            <Member/>
            <div className="space"></div>
            <Footer/>
        </>
    )
}
export default Aboutus;