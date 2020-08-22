import React, {Component} from 'react';
import  {BrowserRouter as Router,Link, Route} from "react-router-dom";

import '../../styles/common/Form.css';
import '../../styles/common/Header.css';
import logo from "../../styles/images/logo.png"
import AdminMenu from "../admin/AdminMenu";
import InstructorMenu from "../instructor/InstructorMenu";
import StudentMenu from "../student/StudentMenu";
import AdminCreation from "../admin/AdminCreation";
import InstructorCreation from "../admin/InstructorCreation";
import CourseCreation from "../admin/CourseCreation";
import AdminHome from "../admin/AdminHome";
import InstructorHome from "../instructor/InstructorHome";
import StudentHome from "../student/StudentHome";
import AllNotifications from "../admin/AllNotifications";
import InstructorNotification from "../instructor/InstructorNotification";
import InstructorCourse from "../instructor/InstructorCourse";
import AssignmentCreation from "../instructor/AssignmentCreation";
import Assignment from "../instructor/Assignment";
import StudentNotification from "../student/StudentNotification";
import StudentCourse from "../student/StudentCourse";
import StudentOtherCourse from "../student/StudentOtherCourse";
import SubmitAssignment from "../student/SubmitAssignment";
import InstructorViewSubmission from "../instructor/InstructorViewSubmission";

class CommonHome extends Component {

    constructor(props){
        super(props);
        this.state  ={
            isAdmin : localStorage.getItem("userType") == "admin",
            // isAdmin : true,

            isInstructor : localStorage.getItem("userType") == "instructor",
            // isInstructor : true,
            isStudent : localStorage.getItem("userType") == "student"
            // isStudent : true
        }


    }

    render() {
        return (


            <Router>
            <div className=" ">

                <div className="Header" >
                    <div className="LogoImage">
                        <img  src={logo} width="" height="100px"></img>
                    </div>

                    <div className="Text">
                        {localStorage.getItem("fullname")} {localStorage.getItem("username")}
                        <button className="btn btn-secondary m-2"> Logout</button>
                    </div>

                {console.log(localStorage.getItem("username"))}
                </div>
                <div >
                {
                    this.state.isAdmin ? <AdminMenu/>  : " "
                }
                {
                    this.state.isInstructor ? <InstructorMenu/> : ""
                }
                {
                    this.state.isStudent ? <StudentMenu/> : ""
                }

                {/*<AdminMenu/>*/}
                {/*<InstructorMenu/>*/}
                {/*<StudentMenu/>*/}

                </div>
            </div>
                {/*Routes for Admin Actor --------------------------------------------------*/}
                <Route exact path = "/CreateAdmin" render = { () => {
                    return <AdminCreation/>
                }
                } />

                <Route exact path = "/CreateInstructor" render = { () => {
                    return <InstructorCreation/>
                }
                } />
                <Route exact path = "/CreateCourse" render = { () => {
                    return <CourseCreation/>
                }
                } />

                <Route exact path = "/HomeAdmin" render = { () => {
                    return <AdminHome/>
                }
                } />


                <Route exact path = "/AllNotifications" render = { () => {
                    return <AllNotifications/>
                }
                } />

                <Route exact path = "/HomeInstructor" render = { () => {
                    return <InstructorHome/>
                }
                } />

                <Route exact path = "/NotificationInstructor" render = { () => {
                    return <InstructorNotification/>
                }
                } />
                <Route exact path = "/CourseInstructor" render = { () => {
                    return <InstructorCourse/>
                }
                } />

                <Route exact path = "/CreateAssignmentInstructor" render = { () => {
                    return <AssignmentCreation/>
                }
                } />

                <Route exact path = "/MarkAssignmentInstructor" render = { () => {
                    return <InstructorHome/>
                }
                } />


                <Route exact path = "/specificAssignments/:courseName" render = { (props) => {
                    return <Assignment courseName={props.match.params.courseName}/>
                }
                } />


                <Route exact path = "/HomeStudent" render = { () => {
                    return <StudentHome/>
                }
                } />

                <Route exact path = "/NotificationStudent" render = { () => {
                    return <StudentNotification/>
                }
                } />

                <Route exact path = "/EnrolledCourses" render = { () => {
                    return <StudentCourse/>
                }
                } />

                <Route exact path = "/OtherCourses" render = { () => {
                    return <StudentOtherCourse/>
                }
                } />

                <Route exact path = "/SubmitAssignment" render = { () => {
                    return <SubmitAssignment/>
                }
                } />

                <Route exact path = "/viewSubmissions/:assignmentName" render = { (props) => {
                    return <InstructorViewSubmission assignmentName={props.match.params.assignmentName}/>
                }
                } />








            </Router>
        );
    }
}

export default CommonHome;