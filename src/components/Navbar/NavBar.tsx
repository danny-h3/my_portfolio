import "./Navbar.scss";

function Navbar() { 

    return <> 
        <div className="menu-container">
            <div className="logo"> DH </div>
            
            <nav className="menu">
                <ul className="menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>   
            </nav>
        </div>
    </>

}

export default Navbar;