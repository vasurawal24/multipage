
import Menu from "./AllComponent/Menu";
import Excellent from "./Reviews/Excellent";
import Reavie from "./Reviews/Reavie";
import './Reviews/Excellent.css';
import Footer from "./AllComponent/Footer";
function Review() {
    return(
        <>
           <Menu/>
            <Reavie/>
            <Excellent/>
            <div className="space"></div>
            <Footer/>
        </>
    )
}

export default Review;