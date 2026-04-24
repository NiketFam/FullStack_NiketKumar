import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from './Navbar';     
import JobForm from './JobForm';  
import JobCard from './JobCard';   
import Profile from './Profile';   
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLoc, setSearchLoc] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios.get("http://localhost:8080/api/jobs/all")
      .then((response) => {
        setJobs(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const deleteJob = (id) => {
    axios.delete(`http://localhost:8080/api/jobs/delete/${id}`)
      .then(() => {
        setJobs(jobs.filter(job => job.id !== id));
      })
      .catch(err => console.error(err));
  };

  const filteredJobs = jobs.filter(job => 
    (job.jobTitle || "").toLowerCase().includes(searchTitle.toLowerCase()) &&
    (job.jobLocation || "").toLowerCase().includes(searchLoc.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      
      <section className="search">
        <input 
          type="text" 
          placeholder="Job title or keyword" 
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={searchLoc}
          onChange={(e) => setSearchLoc(e.target.value)} 
        />
        <button onClick={fetchJobs}>Search Jobs</button>
      </section>

      <Routes>
        <Route path="/" element={
          <section className="container">
            <JobForm onAddJob={addJob} />
            <div className="job-grid">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} onDelete={deleteJob} />
                ))
              ) : (
                <p>No jobs found.</p>
              )}
            </div>
          </section>
        } />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Job Portal | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;