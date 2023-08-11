import React, { useState, useEffect } from "react";

import Subheading from "../Helper/Headings/Subheading";
import BodyCard from "../Helper/BodyCard/BodyCard";

import classes from "./Events.module.css";

import eventData from "./events.json";

import Card from 'react-bootstrap/Card';


const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState();

  useEffect(() => {
    setUpcomingEvents(eventData.upcomingEvents);
  }, [])

  return (
    <BodyCard className={classes.event}>
      <Subheading>
        <span>U</span>pcoming <span>E</span>vents
      </Subheading>
      {upcomingEvents && upcomingEvents.map(ele => {
        return <Card className={classes["upcoming-card"]} bg="dark" text="white">
          <Card.Header className={classes["card-header"]}>{ele.title}</Card.Header>
          <Card.Body>
            <Card.Title className={classes["card-title"]}>{ele.name}</Card.Title>
            <Card.Text className={classes["card-text"]}>
              {ele.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className={classes["card-footer"]}>{ele.location} {ele.date}</Card.Footer>
        </Card>
      })}
    </BodyCard>
  );
};

export default Events;
