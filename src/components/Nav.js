import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/boxes"}>Boxes</Link>
        </nav>
    )
}
export default Nav;