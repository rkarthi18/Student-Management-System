import React, {Component} from 'react';

class AdminProfile extends Component {
    constructor(props){
        super(props);

        this.state={
            fullName:this.props.fullName,
            username:this.props.username,
            password:this.props.password,
            securityQuestion:this.props.securityQuestion,
            securityAnswer:this.props.securityAnswer,
            phone:this.props.phone,
            email:this.props.email
        }
    }

    // onUpdate=(e)=>{
    //     e.preventDefault();
    //
    //     fetch('',{
    //         method:"PUT",
    //         body:JSON.stringify(data),
    //         headers:{"Content-Type":"application/json"}
    //     }).then(res=>{
    //         return res.json();
    //     }).then(data=>{
    //         console.log(data);
    //         alert(`Information was successfully updated`);
    //     });
    // }

    render() {
        return (
            <div className="container">
                <br/><br/><br/><br/>
                <h2 className="display-4 mb-3"> Welcome To Your Profile {this.state.fullName}!! </h2>
                <br/><br/>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td>{this.state.fullName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{this.state.email}</td>
                    </tr>
                    <tr>
                        <td>Phone No</td>
                        <td>{this.state.phone}</td>
                    </tr>
                    <tr>
                        <td>Username </td>
                        <td>{this.state.username}</td>
                    </tr>
                    <tr>
                        <td>Password </td>
                        <td>{this.state.password}</td>
                    </tr>
                    <tr>
                        <td>Security Question</td>
                        <td>{this.state.securityQuestion}</td>
                    </tr>
                    <tr>
                        <td>Security Answer </td>
                        <td>{this.state.securityAnswer}</td>
                    </tr>
                    </tbody>

                </table>
                <br/>
                <form>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Update Profile" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AdminProfile;
