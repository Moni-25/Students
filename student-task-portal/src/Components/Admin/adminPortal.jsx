import { useLocation, Link } from "react-router-dom";
import MentorList from "../Mentor/mentorList";
import credit from "../../assets/credit.png"
import guvi from "../../assets/Guvi.png"

export default function AdminPortal()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log(data)
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" 
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"
                            style={{color: "black", border: "2px solid black"}}>
                            <i className="bi bi-distribute-vertical"></i>
                    </button>
                <div className="collapse navbar-collapse" tabindex="-1" id="navbarToggler" aria-labelledby="offcanvasDarkNavbarLabel"> 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/mentor_list" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link active" href="#">
                                <i className="bi bi-speedometer2"></i>
                                        &nbsp;&nbsp;Mentor List
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/assign_mentor" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link" href="#">
                                <i className="bi bi-speedometer2"></i>
                                        &nbsp;&nbsp;Assign Mentor
                                </a>
                            </Link>
                        </li>   
                        <li className="nav-item">
                        <Link to="/mentor" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link" aria-current="page" href="#">
                            <i className="bi bi-person-video"></i>
                                    &nbsp;&nbsp;Create Mentor
                            </a>
                        </Link>
                        </li>  
                    </ul>
                    <span className="navbar-brand" href="#">{data}</span>
                </div>
                </div>
            </nav>

            <div className="container">
                <div className="card" style={{height: "21rem", marginTop: "8%"}}>
                    <div className="row=lg-12 d-flex">
                    <div className="col-lg-6 mt-3">
                        <h3 style={{fontWeight: "700"}}>Description</h3>
                        <p className="mt-2">
                        Zen Class is one of the industry’s leading Project Based Career Programs offered by GUVI that
                        promises 100% Job Placement Support on completing the course. Conducted by an IIT Madras incubated company 
                        & designed by our Founders(Ex-Paypal Employees) also offers mentoring through experts from companies like 
                        Google, Microsoft, Flipkart, Zoho & Freshworks for placing you in top companies with high salaries.
                        </p>
                        <img src={credit} alt="mentor" height={"40%"} width={"82%"}/>
                    </div>
                    <div className="col-lg-6 mt-4 ms-3">
                        <img src={guvi} alt="mentor" height={"105%"} width={"92%"} style={{borderRadius: "12px"}}/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}