import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduserData } from "../reducers/formDataReducer";
import { addSampleData } from "../reducers/sampleDataReducer";



function FormPage (props) {
  const [formData, setFormData] = useState({ name: "", username: "", education: "", email: "", mobileNumber: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameInputRef = useRef(null);
  const sampleData = useSelector((state) => state.sampleData)
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every((field) => field.trim() !== "")) {
      const duplicateData = sampleData.some(
        (sample) => 
          sample.name.trim().toLowerCase() === formData.name.trim().toLowerCase() &&
          sample.username.trim().toLowerCase() === formData.username.trim().toLowerCase() &&
          sample.email.trim().toLowerCase() === formData.email.trim().toLowerCase()
      )
      if(duplicateData){
        dispatch(adduserData({ ...formData, isMatchFound:true }));
      }
      else{
        dispatch(adduserData(formData));
        dispatch(addSampleData(formData));
      }
      navigate(`/detailspage`);
    }
  };
  const isFormValid = Object.values(formData).every((field) => field.trim() !== "")

  
  return (
    <div className="container">
      <header>{props.title}</header>
      <div className="section-container">    
        <div className="form-container">
        <div className="form-header">
            <h2>Registration Form</h2>
            <button type="button" onClick={() => navigate("/detailspage")}>
              Go to Users Details
            </button>
        </div>   
          <form onSubmit={handleSubmit}>
            <label> Name <span className="required">*</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} ref={nameInputRef} required/>
            </label>
            <label> Username <span className="required">*</span>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required
              />
            </label>
            <label> Education <span className="required">*</span>
              <input type="text" name="education" value={formData.education} onChange={handleChange} required
              />
            </label>
            <label> Email <span className="required">*</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required
              />
            </label>
            <label>
              Mobile Number <span className="required">*</span>
              <input type="text" name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" disabled={!isFormValid}>Submit</button>
          </form>
          </div>
      </div>
    </div>
  );
};

export default FormPage;
