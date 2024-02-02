import Footer from "./AllComponent/Footer";
import Member from "./AllComponent/Member";
import Menu from "./AllComponent/Menu";
import Plan from "./AllComponent/Plan";
import Photos from "./Gallery/Photos";
import Title from "./Gallery/Title";

function Gallery() {
    return(
        <>
            <Menu/>
            <Title/>
            <Photos/>
            <Member/>
           <Footer/>
        </>
    )
}
export default Gallery;