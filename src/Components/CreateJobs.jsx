import React, { useState } from "react";
import MyInputComponent from "./MyInputComponent";
import MySelectComponent from "./MySelectComponent";
import "./CreateJobs.css";

import {actions} from '../Features/createJob/slice.js'
import { useDispatch } from "react-redux";


const CreateJobs = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
  companyName: "Tech Solutions",
  jobTitle: "Software Engineer",
  jobId: "JOB12345",
  jobRole: "Full Stack Developer",
  jobLocation: "Bangalore, India",
  package: "12 LPA",
  genderPreference: "Any",
  qualification: "B.Tech in Computer Science",
  streams: "Computer Science, IT",
  yearOfPassing: "2023",
  backlogAllowed: true,
  sslcMinPercentage: "60",
  pucMinPercentage: "65",
  graduateMinPercentage: "70",
  gapInEducation: false,
  interviewRounds: "3",
  modeOfInterview: "Online",
  serviceAgreement: "2 years",
  deposit: true,
  relocation: true,
  certificateOfSubmission: true,
  shifts: "Day/Night",
  blockingPeriod: "6 months",
  interviewDate: "2024-09-20",
  expiresIn: "2024-12-31",
  notes: "Excellent coding and problem-solving skills required.",
  noOfPosition: "5",
  skills: "JavaScript, React, Node.js",
  createdBy: "John Doe",
  jobDescriptionLink: "https://example.com/job-description",
  online: true,
  employabilityScore: "85",
  isTechnical: true,
  onHold: false,
  interviewRound: "Technical, HR",
  interviewRoundDetails: "First technical round, followed by HR interview.",
});


 const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
       dispatch (actions.createJob(data)) ;
      console.log(data)
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const errors = {};
    if (!data.companyName) errors.companyName = "Company Name is required";
    if (!data.jobId) errors.jobId = "Job ID is required";
    if (!data.jobTitle) errors.jobTitle = "Job Title is required";
    if (!data.jobRole) errors.jobRole = "Job Role is required";
    if (!data.jobLocation) errors.jobLocation = "Job Location is required";
    if (!data.package) errors.package = "Package is required";
    if (!data.genderPreference)
      errors.genderPreference = "Gender Preference is required";
    if (!data.qualification) errors.qualification = "Qualification is required";
    if (!data.streams) errors.streams = "Streams are required";
    if (!data.yearOfPassing) {
      errors.yearOfPassing = "Year of Passing is required";
    }
    if (!data.interviewRound) {
      errors.interviewRound = "interview round is required";
    }

    if (!data.interviewRoundDetails) {
      errors.interviewRoundDetails = "interviewRoundDetails  is required";
    }

    if (!data.interviewRoundDetails) {
      errors.interviewRoundDetails = "interviewRoundDetails  is required";
    }

    if (!data.jobDescriptionLink) {
      errors.jobDescriptionLink = "jobDescription  is required";
    }

    if (!(data.employabilityScore.toString().trim())) {
      errors.employabilityScore = "employabilityScore  is required";
    }
    if (!data.jobDescriptionLink) {
      errors.jobDescriptionLink = "jobDescriptionLink  is required";
    }

    

    if (!data.createdBy) {
      errors.createdBy = "careatedBy  is required";
    }

     if (!data.skills) {
       errors.skills = "skills  is required";
     }

        if (!data.noOfPosition) {
          errors.noOfPosition = "no of posittio  is required";
        }


    if (!data.qualification) {
      errors.qualification = "qualification  is required";
    }
    if (data.sslcMinPercentage === "" || isNaN(data.sslcMinPercentage)) {
      errors.sslcMinPercentage = "Valid SSLC Min Percentage is required";
    }
    if (data.pucMinPercentage === "" || isNaN(data.pucMinPercentage)) {
      errors.pucMinPercentage = "Valid PUC Min Percentage is required";
    }
    if (
      data.graduateMinPercentage === "" ||
      isNaN(data.graduateMinPercentage)
    ) {
      errors.graduateMinPercentage =
        "Valid Graduate Min Percentage is required";
    }
    return errors;
  };

  return (
    <div className="create-jobs-container">
      <h1>Create Job Listing</h1>
      <form onSubmit={handleSubmit} className="create-jobs-form">
        <div className="form-group">
          <MyInputComponent
            name="companyName"
            label="Company Name"
            value={data.companyName}
            handleChange={handleChange}
          />
          {errors.companyName && (
            <div className="error">{errors.companyName}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="jobId"
            label="Job ID"
            value={data.jobId}
            handleChange={handleChange}
          />
          {errors.jobId && <div className="error">{errors.jobId}</div>}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="jobTitle"
            label="Job Title"
            value={data.jobTitle}
            handleChange={handleChange}
          />
          {errors.jobTitle && <div className="error">{errors.jobTitle}</div>}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="jobRole"
            label="Job Role"
            value={data.jobRole}
            handleChange={handleChange}
          />
          {errors.jobRole && <div className="error">{errors.jobRole}</div>}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="jobLocation"
            label="Job Location"
            value={data.jobLocation}
            handleChange={handleChange}
          />
          {errors.jobLocation && (
            <div className="error">{errors.jobLocation}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="package"
            label="Package"
            value={data.package}
            handleChange={handleChange}
          />
          {errors.package && <div className="error">{errors.package}</div>}
        </div>
        <div className="form-group">
          <MySelectComponent
            name="genderPreference"
            label="Gender Preference"
            value={data.genderPreference}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            handleChange={handleChange}
          />
          {errors.genderPreference && (
            <div className="error">{errors.genderPreference}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="qualification"
            label="Qualification"
            value={data.qualification}
            handleChange={handleChange}
          />
          {errors.qualification && (
            <div className="error">{errors.qualification}</div>
          )}
        </div>
        <div className="form-group">
          <MySelectComponent
            name="streams"
            label="streams"
            value={data.streams}
            options={[
              { value: "cs", label: "computer science" },
              { value: "civil", label: "civil" },
              { value: "mechanical", label: "mechanical" },
            ]}
            handleChange={handleChange}
          />
          {errors.streams && <div className="error">{errors.streams}</div>}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="yearOfPassing"
            label="Year of Passing"
            value={data.yearOfPassing}
            handleChange={handleChange}
          />
          {errors.yearOfPassing && (
            <div className="error">{errors.yearOfPassing}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="sslcMinPercentage"
            label="SSLC Min Percentage"
            value={data.sslcMinPercentage}
            handleChange={handleChange}
          />
          {errors.sslcMinPercentage && (
            <div className="error">{errors.sslcMinPercentage}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="pucMinPercentage"
            label="PUC Min Percentage"
            value={data.pucMinPercentage}
            handleChange={handleChange}
          />
          {errors.pucMinPercentage && (
            <div className="error">{errors.pucMinPercentage}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="graduateMinPercentage"
            label="Graduate Min Percentage"
            value={data.graduateMinPercentage}
            handleChange={handleChange}
          />
          {errors.graduateMinPercentage && (
            <div className="error">{errors.graduateMinPercentage}</div>
          )}
        </div>
        <div className="form-group">
          <MySelectComponent
            name="gapInEducation"
            label="Gap in education"
            value={data.gapInEducation}
            options={[
              { value: "allowed", label: "allowed" },
              { value: "notAllowed", label: "notAllowed" },
            ]}
            handleChange={handleChange}
          />
          
        </div>

        <div className="form-group">
          <MySelectComponent
            name="modeOfInterview"
            label="Mode of Interview"
            value={data.modeOfInterview}
            options={[
              { value: "online", label: "online" },
              { value: "offline", label: "offline" },
            ]}
            handleChange={handleChange}
          />
          {errors.modeOfInterview && (
            <div className="error">{errors.modeOfInterview}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="serviceAgreement"
            label="Service Agreement"
            value={data.serviceAgreement}
            handleChange={handleChange}
            placeholder="give in monts"
          />
          {errors.serviceAgreement && (
            <div className="error">{errors.serviceAgreement}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="shifts"
            label="Shifts"
            value={data.shifts}
            handleChange={handleChange}
          />
          {errors.Shifts && <div className="error">{errors.Shifts}</div>}
        </div>
        <div className="form-group">
          <MySelectComponent
            name="blockingPeriod"
            label="Blocking Period"
            value={data.blockingPeriod}
            options={[
              { value: 1, label: "1 months" },
              { value: "2", label: "2 months" },
              { value: "3", label: "3 months" },
            ]}
            handleChange={handleChange}
          />
          {errors.blockingPeriod && (
            <div className="error">{errors.blockingPeriod}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="interviewDate"
            label="Interview Date"
            type="date"
            value={data.interviewDate}
            handleChange={handleChange}
          />
          {errors.interviewDate && (
            <div className="error">{errors.interviewDate}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="expiresIn"
            label="Expires In"
            value={data.expiresIn}
            handleChange={handleChange}
          />
          {errors.expiresIn && <div className="error">{errors.expiresIn}</div>}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="notes"
            label="Notes"
            value={data.notes}
            handleChange={handleChange}
          />
          {errors.notes && <div className="error">{errors.notes}</div>}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="noOfPosition"
            label="Number of Positions"
            value={data.noOfPosition}
            handleChange={handleChange}
          />
          {errors.noOfPosition && (
            <div className="error">{errors.noOfPosition}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="skills"
            label="Skills"
            value={data.skills}
            handleChange={handleChange}
          />
          {errors.skills && <div className="error">{errors.skills}</div>}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="createdBy"
            label="Created By"
            value={data.createdBy}
            handleChange={handleChange}
          />
          {errors.createdBy && <div className="error">{errors.createdBy}</div>}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="jobDescriptionLink"
            label="Job Description Link"
            value={data.jobDescriptionLink}
            handleChange={handleChange}
          />
          {errors.jobDescriptionLink && (
            <div className="error">{errors.jobDescriptionLink}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="employabilityScore"
            label="Employability Score"
            value={data.employabilityScore}
            handleChange={handleChange}
          />

          {errors.employabilityScore && (
            <div className="error">{errors.employabilityScore}</div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="interviewRound"
            label="Interview Round"
            value={data.interviewRound}
            handleChange={handleChange}
          />
          {errors.interviewRound && (
            <div className="error" style={{ color: "red" }}>
              {errors.interviewRound}
            </div>
          )}
        </div>
        <div className="form-group">
          <MyInputComponent
            name="interviewRoundDetails"
            label="Interview Round Details"
            value={data.interviewRoundDetails}
            handleChange={handleChange}
          />
          {errors.interviewRoundDetails && (
            <div className="error" style={{ color: "red" }}>
              {errors.interviewRoundDetails}
            </div>
          )}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateJobs;
