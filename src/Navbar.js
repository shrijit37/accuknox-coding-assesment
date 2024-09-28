import React from 'react'
import AccountButton from "./Components/AccountButton"
import { Link, animateScroll as scroll } from 'react-scroll';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">  </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Dashboard V2</a>
                        </li>
                    </ul>
                    <form className="d-flex w-25" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Anything" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <div class="d-flex dropdown ms-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            CNAPP Dashboard
                        </button>
                        <ul class="dropdown-menu">

                            <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <li><a class="dropdown-item" href="#">CSPM Executive Dashboard</a></li>
                            </Link>
                            
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                 <li><a class="dropdown-item" href="#">CWPP Dashboard</a></li>
                            </Link>
                           

                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                 <li><a class="dropdown-item" href="#">CWPP Dashboard</a></li>
                            </Link>
                            
                        </ul>
                    </div>


                    <div class="d-flex dropdown ms-5">
                        <AccountButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar