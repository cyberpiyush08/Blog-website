import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import BodyCard from '../Helper/BodyCard/BodyCard';
import Subheading from '../Helper/Headings/Subheading';
import Button from 'react-bootstrap/Button';

import classes from "./JobDesc.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faCalendarDays, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

import jobData from './jobs.json';

const JobDesc = () => {

    const { jobId } = useParams();
    const navigate = useNavigate();

    const [desc, setDesc] = useState("");

    const handleClick = () => {
        navigate("/")
    }

    useEffect(() => {
        const data = jobData.filter(job => job.index === +jobId);
        setDesc(data[0]);
    }, []);

  return (
    desc && <BodyCard className={classes.description}>
        <Subheading>
            <span>J</span>ob <span>D</span>escription
        </Subheading>
        <div className={classes["job-description"]}>
            <h2>{desc["job_title"]}</h2>
            <h5>{desc["company_name"]}</h5>
            <p><FontAwesomeIcon icon={faLocationPin} /> Location: {desc["location"]}</p>
            <p><FontAwesomeIcon icon={faCalendarDays} /> Apply By: {desc["end_date"]}</p>
            <p><FontAwesomeIcon icon={faMoneyBill} /> Salary: {desc["salary"]}</p>
            <div className={classes["job-work-content"]}>
                <div>
                    <h4>Select day to day work</h4>
                    <ul>
                        {desc["daily_work"].map(work => {
                            return <li key={Math.random()}>{work}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h4>Requiments</h4>
                    <ul>
                        {desc["requirements"].map(req => {
                            return <li key={Math.random()}>{req}</li>
                        })}
                    </ul>
                </div>
            </div>
            <Button variant='info' size='lg' onClick={handleClick}>Apply Now!</Button>
        </div>
    </BodyCard>
  )
}

export default JobDesc