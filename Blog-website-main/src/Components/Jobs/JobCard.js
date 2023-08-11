import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classes from './JobCard.module.css';

const JobCard = (props) => {

  const navigate = useNavigate();

  return (
    <Card className={classes["job-card"]}>
        <Card.Header as="h4">{props.location}</Card.Header>
        <Card.Body>
            <Card.Title>{props.companyName}</Card.Title>
            <Card.Text>Application intake Started from: {props.startDate}</Card.Text>
            <Card.Text>Expires on: {props.endDate}</Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Text>Salary {props.salary}</Card.Text>
        </Card.Body>
        <Card.Body>
            <Link to={`/jobs/${props.id}`}>
              View details
            </Link>
            <Button variant='info' onClick={() => {navigate("/")}}>Apply Now</Button>
        </Card.Body>
    </Card>
  )
}

export default JobCard