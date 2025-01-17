import React from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

function DetailsPage(props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <header>{props.title}</header>
      <div className="section-container">
        <div className="table-container">
        <div className="form-header">
          <h2>Users Table</h2>
          <button onClick={() => navigate("/")}>Go to form</button>
          </div>
          <table >
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Education</th>
                <th>Email</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {props.sampleData.map((user, index) => {
                const isMatchFound = props.formData.some(
                  (sample)=>
                    sample.name.trim().toLowerCase() === user.name.trim().toLowerCase() &&
                    sample.username.trim().toLowerCase() === user.username.trim().toLowerCase() &&
                    sample.email.trim().toLowerCase() === user.email.trim().toLowerCase() &&
                    sample.isMatchFound 
                );
                return(
                <tr key={index} title={isMatchFound? "Match Found" : ""} >
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.education}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNumber}</td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  formData: state.formData,
  sampleData: state.sampleData,
})

export default connect(mapStatetoProps)(DetailsPage);
