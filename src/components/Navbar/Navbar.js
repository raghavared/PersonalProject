import {React,useState} from 'react'
import './Navbar.css'


// export default function Navbar() {
//   return (
//     <div>
//         <ul>
//             <li><a class="active" href="#home">Home</a></li>
//             <li><a href="#news">News</a></li>
//             <li><a href="#contact">Contact</a></li>
//             <li><a href="#about">About</a></li>
//         </ul>
//     </div>
//   )
// }


const Navbar = () => {
    const [active, setActive] = useState("");
    const handleClick = (event) => {
        setActive(event.target.id);
    }    
    return (
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNavDropdown"
    //       aria-controls="navbarNavDropdown"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
  
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">
    //             Home <span className="sr-only">(current)</span>
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdownMenuLink"
    //             data-toggle="dropdown"
    //             aria-haspopup="true"
    //             aria-expanded="false"
    //           >
    //             Dropdown link
    //           </a>
    //           <div
    //             className="dropdown-menu"
    //             aria-labelledby="navbarDropdownMenuLink"
    //           >
    //             <a className="dropdown-item" href="#">
    //               Action
    //             </a>
    //             <a className="dropdown-item" href="#">
    //               Another action
    //             </a>
    //             <a className="dropdown-item" href="#">
    //               Something else here
    //             </a>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    <nav>
        {/* <NavLink to='/'>
            Home   
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/roadmap' activeStyle>
                RoadMap
            </NavLink>
            <NavLink to='/blueprint' activeStyle>
                Blueprint
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact
            </NavLink>
        </NavMenu> */}
        {/* <div className='header-full-main-cont'> */}
        <div>
            <ul>
                <li><a className={active === "1" ? "active" : undefined} id={"1"} onClick={handleClick} href="#home"><b>Home</b></a></li>
                <li><a className={active === "2" ? "active" : undefined} id={"2"} onClick={handleClick} href="#roadmap"><b>RoadMap</b></a></li>
                <li><a className={active === "3" ? "active" : undefined} id={"3"} onClick={handleClick} href="#blueprint"><b>Blue Print</b></a></li>
                <li><a className={active === "4" ? "active" : undefined} id={"4"} onClick={handleClick} href="#about"><b>About</b></a></li>
                <li><a className={active === "5" ? "active" : undefined} id={"5"} onClick={handleClick} href="#contact"><b>Contact</b></a></li>
            </ul>   
        </div>
    </nav>
    );
  };

  
  export default Navbar;
