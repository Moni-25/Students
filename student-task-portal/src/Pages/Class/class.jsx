
import { useLocation, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import CourseMap from "../Course Roadmap/courseMap";

export default function ClassDetails()
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
                        <Link to="/class" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link active" aria-current="page" href="#" style={{fontWeight: "bolder"}}>
                                <i className="bi bi-speedometer2"></i>
                                    &nbsp;&nbsp;Class
                            </a>
                        </Link>
                        </li>      
                        <li className="nav-item">
                        <Link to="/task_submit" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link" href="#">
                                <i className="bi bi-list-task"></i>
                                    &nbsp;&nbsp;Tasks
                            </a>
                        </Link>
                        </li>
                    </ul>
                    <Link to="/">
                        <a className="navbar-brand" href="#">{data}</a>
                    </Link>
                    {/* <a className="navbar-brand" href="#">{data}</a> */}
                    </div>
                </div>
            </nav>
            
            <div className="row-lg-12 d-flex">
                <div className="col-lg-4 mt-5" id="coursemap">
                    <CourseMap state={{ fromHome: { data }}}/>
                </div>
                <div className="col-lg-8">
                <div className="container mt-5">
                <div className="card ms-4 mt-4" style={{width: "50rem", padding: "0px", border: "2px solid #bfbfbf"}}>
                            <div className="card-header mt-2">
                                <h5 id="taskName" style={{fontWeight: "600", color: "#3333ff"}}>
                                No session title choose
                                <h6 className="mt-2" style={{color: "black"}}>Kindly select class from course roapmap</h6>
                                </h5>
                            </div>
                            <div className="card-body">
                                <h6 style={{fontWeight: "550"}}>Contents:</h6>
                                <div className="ms-4">
                                <span className="preread">
                                    No content available<br></br>
                                </span>
                                </div>
                                <div className="mt-2 mb-1" style={{fontWeight: "550"}}>Pre-Read:</div>
                                <div className="ms-4"><span className="preread">No preread available</span></div>
                            </div>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}