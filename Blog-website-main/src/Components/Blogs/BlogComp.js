import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import Subheading from "../Helper/Headings/Subheading";
import BodyCard from "../Helper/BodyCard/BodyCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import classes from "./BlogComp.module.css";

import { TECH_TITLE, TRAVEL_TITLE, HEALTH_TITLE, TECH_IMG, TRAVEL_IMG, HEALTH_IMG } from "./ImageData";

const BlogComp = () => {
  const [topicList, setTopicList] = useState();
  const [images, setImages] = useState();
  const [colorClass, setColorClass] = useState();
  const [buttonColor, setButtonColor] = useState();
  const { topic } = useParams();

  useEffect(() => {
    switch (topic) {
      case "Technology":
        setTopicList(TECH_TITLE);
        setImages(TECH_IMG);
        setColorClass("techno");
        setButtonColor("primary");
        break;
      case "Travel":
        setTopicList(TRAVEL_TITLE);
        setImages(TRAVEL_IMG);
        setColorClass("travel");
        setButtonColor("warning");
        break;
      case "Health":
        setTopicList(HEALTH_TITLE);
        setImages(HEALTH_IMG);
        setColorClass("health");
        setButtonColor("success");
        break;
    }
  }, []);

  return (
    <BodyCard className={`${classes["topic-blog"]} ${classes[colorClass]}`}>
      <Subheading>
        <span>{topic[0]}</span>
        {topic.slice(1, topic.length)}
      </Subheading>
      <div className={classes["topic-cards"]}>
        {topicList &&
            topicList.map((ele, ind) => {
            return (
                <>
                <Card className={classes["topic-card"]} key={ind}>
                    <Card.Img variant="top" src={images[ind]} /> 
                    <Card.Body>
                    <Card.Title>{ele}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam
                    </Card.Text>
                    <NavLink to={`/blogs/${topic}/${ind}`}>
                        <Button variant={buttonColor}>Read Blog</Button>
                    </NavLink>
                    </Card.Body>
                </Card>
                </>
            );
            })}
      </div>
    </BodyCard>
  );
};

export default BlogComp;
