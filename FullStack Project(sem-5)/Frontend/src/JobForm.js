import React from 'react';
import axios from 'axios';

function JobForm({ onAddJob }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      jobTitle: e.target.jobTitle.value,
      companyName: e.target.compName.value,
      jobLocation: e.target.jobLoc.value,
      jobDescription: e.target.jobDesc.value,
    };

    axios.post("http://localhost:8080/api/jobs/add", newJob)
      .then((response) => {
        alert("Job Posted Successfully!");
        onAddJob(response.data);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to save job.");
      });
  };

  return (
    <div className="form-box">
      <h3 className="glitter-text">Post a New Job</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="jobTitle" placeholder="Job Title" required />
        <input type="text" name="compName" placeholder="Company Name" required />
        <input type="text" name="jobLoc" placeholder="Job Location" required />
        <textarea name="jobDesc" placeholder="Job Description" rows="3"></textarea>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobForm;