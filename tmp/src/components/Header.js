import { styling } from "../utility/styling.js"
import { Link } from "./Link.js";

const headerStyles = [
    // "position: fixed",
    // "top: 0",
    // "left: 0",
    // "width: 100%",
    // "height: 60px",
    // "margin-bottom: 70px"
]

const navStyles = [
    // "height: 80px"
]

// const logoStyles = {
//     position: "relative",
//     width: "150px",
//     height: "100%",
//     "font-size": "30px",
//     color: "white",
//     padding: "15px",
//     "text-align": "center",
//     // margin: "20px",
// }

export const Header = () =>{
    const pathname = location.pathname;
    console.log(pathname);
    return (
        /*html*/
        `<header style=${styling(headerStyles)})}><nav class="navbar navbar-expand-lg bg-light" style=${styling(navStyles)}><div class="container-fluid">${Link("Navbar", "/", {className: "navbar-brand"})}<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item">${location.pathname === "/"
                                ?  Link("Home", "/", {className: "nav-link active"})
                                :location.pathname === "/index.html"
                                ?  Link("Home", "/", {className: "nav-link active"})
                                : Link("Home", "/", {className: "nav-link"})
                                }</li><li class="nav-item">${location.pathname === "/about.html"
                                ?  Link("About", "/about.html", {className: "nav-link active"})
                                :  Link("About", "/about.html", {className: "nav-link"})
                                }</li><li class="nav-item dropdown"><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></li></ul><form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success" type="submit">Search</button></form></div></div></nav></header>`
    )
}