import React, { useState } from 'react';

import BodyCard from "../Helper/BodyCard/BodyCard";
import Subheading from '../Helper/Headings/Subheading';
import JobCard from "./JobCard";
import Form from 'react-bootstrap/Form';

import jobData from './jobs.json';

import classes from './Jobs.module.css'

const Jobs = () => {

  const [jobs, setJobs] = useState(jobData);

  const handleChange = (e) => {
    if (e.target.value === 'All') {
      setJobs(jobData);
      return ;
    }
    const data = jobData.filter(job => e.target.value === job["job_title"]);
    setJobs(data);
  }

  return (
    <BodyCard className={classes["job-content"]}>
        <Subheading>
            <span>J</span>obs <span>A</span>vailable
        </Subheading>
        <Form.Select aria-label="Default select example" onChange={handleChange}>
            <option>All</option>
            <option>Web Developer</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Fullstack Developer</option>
            <option>Digital Marketing Specialist</option>
            <option>Software Developer</option>
            <option>App Developer</option>
            <option>Video Editor</option>
        </Form.Select>
        <div className={classes.jobs}>
          {jobs.map(job => {
            return <JobCard 
              key = {job["index"]}
              id = {job["index"]}
              companyName = {job["company_name"]}
              location = {job["location"]}
              startDate = {job["start_date"]}
              endDate = {job["end_date"]}
              salary = {job["salary"]}
            />
          })}
        </div>
    </BodyCard>
  )
}

export default Jobs;