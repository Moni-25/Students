import CourseMap from "../../Pages/Course Roadmap/courseMap";
import Task from "../Task/task";
import {Link, useLocation} from "react-router-dom";

export default function ClassOne()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log("Day1",data);
    let name = "JavaScript - Day -1: Introduction to Browser & web";
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
                <div className="col-lg-4 mt-5">
                    <CourseMap state={{ fromHome: { data }}}/>
                </div>

                <div className="col-lg-8">
                    <div className="container">
                        <div className="card ms-4 mt-5" style={{width: "50rem", padding: "0px", border: "2px solid #bfbfbf"}}>
                            <div className="card-header mt-2">
                                <h5 id="taskName" style={{fontWeight: "600", color: "#3333ff"}}>JavaScript - Day -1: Introduction to Browser & web</h5>
                            </div>
                            <div className="card-body">
                                <h6 style={{fontWeight: "550"}}>Contents:</h6>
                                <div className="ms-4">
                                <span className="preread">
                                    Introduction to web Browser Wars DOM tree CSSOM tree,<br></br>
                                    Internals IP - MAC address - Ports & Evolution of HTTP,<br></br>
                                    HTTP Methods<br></br>
                                    How the Server looks at the URL<br></br>
                                    Request & Response cycle<br></br>
                                </span>
                                </div>
                                <div className="mt-2 mb-1" style={{fontWeight: "550"}}>Pre-Read:</div>
                                <div className="ms-4"><span className="preread">No preread available</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row-lg-12">
                <div className="col-lg-8 ms-4 mt-3">
                    <div className="container">
                        <h5 style={{fontWeight: "600", color: "#3333ff"}}>Task Submission</h5>
                    </div>
                </div>
            </div> */}
            
            <div className="row-lg-12 d-flex">
                
            <div className="col-lg-4 mt-5">

                </div>
                <div className="col-lg-8">
                    <div className="container">
                    <h5 style={{fontWeight: "600", color: "#3333ff"}} className="ms-4 mt-3">Task Submission</h5>
                    <Task state={{ fromHome: { data }}} val={name}/>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mb-5"></div>
        </>
    )
}