import Home from '../../Pages/Home/Home'
import Menu from '../Menu/Menu'
import  './Layout.css'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
// import Menu from '../Menu/Menu';

const Layout = ({ toggle, handleToggle }) => {

    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? `sidebar sidebar-toggle` : `sidebar`} style={{ zIndex: 1000 }}>
                    <div className="sidebar-toggle-icons">
                        <p onClick={handleToggle}>{toggle ? <FaAngleDoubleLeft size={40} /> : <FaAngleDoubleRight size={40} />}</p>
                    </div>
                    <Menu toggle={toggle} />
                </div>
                <div className="container" style={toggle ? { paddingLeft: "150px" } : { paddingLeft: "50px" }}>
                    <Home toggle={toggle} />
                </div>
            </div>
        </>

    )
}

export default Layout

// 
