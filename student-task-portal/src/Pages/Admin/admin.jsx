import { useContext, useState } from "react";
import { adminContext } from "../../Context/adminContext";
import {Link, useNavigate} from "react-router-dom";

export default function Admin()
{
    const {admin = []} = useContext(adminContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        adminUsername: "",
        adminPassword: ""
      });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
          ...formData,
          [name]: value
        });
    };

    const validateForm = () => 
    {
        let isValid = true;
        const newErrors = {};
    
        // Validate email
        if (!formData.adminUsername) {
          newErrors.adminUsername = "Username is required";
          isValid = false;
        }
    
        // Validate password
        if (!formData.adminPassword) {
          newErrors.adminPassword = "Password is required";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };

    // Login Submission
    var login_status = "false";
    function handleButton(e)
    {
        e.preventDefault();
        let users = "";
        if (validateForm()) {
            // Form is valid, you can submit or process the data here
            console.log("Form data:", formData);
            setSubmitted(true); // Set a submitted flag
          }
        console.log("Form data:", formData);
        const user = formData.adminUsername;
        const pass = formData.adminPassword;
        console.log(user, pass, "Admin", admin);
        admin.map((adminData, index) => {
            if(user === adminData.admin_user && pass === adminData.admin_pass){
                login_status = "true";
                users = adminData.admin_user;
            }
        }
        )
        const data = users
        console.log(login_status)
        if(login_status === "true"){
            console.log(`${users} Login Successfully!!!`);
            alert(`${users} Login Successfully!!!`);
            navigate("/admin_portal", {state:{ fromHome: { data }}});
        }
        else{
            alert("Username or Password Incorrect");
        }
        //console.log(studentLogin)
    }
    return (
        <>
            <div className="bgImage"></div>
            <div className="row">
            <div className="card border-primary  col-lg-12">
        
                <h5 className="mt-3 text-center">Admin Login</h5>
        
                <div className="card-body">
                    <div className="">
                        <label htmlFor="username" className="form-label">Username</label><br></br>
                    </div>

                    <div className="mb-3" style={{display: "flex"}}>
                        <i className="bi bi-person-fill form-control"></i>
                        <input type="text" className="form-control" id="admin_username" name="adminUsername" placeholder="Username"
                            onChange={handleInputChange}/>
                    </div>

                    {errors.adminUsername && 
                        <div className="error mb-2 ms-2" style={{fontSize:"13px", color: "red"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.adminUsername}
                    </div>}

                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Password</label><br></br>
                    </div>

                    <div className="mb-3" style={{display: "flex"}}>
                        <i className="bi bi-key-fill form-control"></i>
                        <input type="password" className="form-control" id="admin_password" name="adminPassword" 
                            placeholder="Password" required onChange={handleInputChange}/>
                    </div>

                    {errors.adminPassword && 
                        <div className="error mb-2 ms-2" style={{fontSize:"13px", color: "red"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.adminPassword}
                    </div>}

                    <div className="mt-3 text-center">
                        <button type="button" className="btn btn-primary" onClick={handleButton}>Login</button>
                    </div>
                </div>
            </div>
            </div>
        </>
     )
}