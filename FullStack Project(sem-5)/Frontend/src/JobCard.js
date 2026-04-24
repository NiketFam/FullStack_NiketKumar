import React from 'react';
import axios from 'axios';

function JobCard({ job, onDelete }) {
  const handleApply = () => {
    const name = prompt("Enter your Name:");
    const email = prompt("Enter your Email:");

    if (name && email) {
      const applicationData = {
        applicantName: name,
        applicantEmail: email,
        jobId: job.id
      };

      axios.post("http://localhost:8080/api/jobs/apply", applicationData)
        .then(() => alert(`Success! Application sent for ${job.jobTitle}`))
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="job-card">
      <button className="delete-btn" onClick={() => onDelete(job.id)}>×</button>
      <h3>{job.jobTitle}</h3>
      <p><strong>Company:</strong> {job.companyName}</p>
      <p><strong>Location:</strong> {job.jobLocation}</p>
      <p className="description">{job.jobDescription}</p>
      <button className="apply-btn" onClick={handleApply}>Apply Now</button>
    </div>
  );
}

export default JobCard;