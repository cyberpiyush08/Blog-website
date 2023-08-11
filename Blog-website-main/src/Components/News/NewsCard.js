import React, { useState, useEffect } from 'react';

// images
import Business from '../../Images/business.jpg';
import Food from "../../Images/food.jpg";
import Health from "../../Images/health.jpeg";
import Tech from '../../Images/tech.jpg';
import Travel from "../../Images/travel.jpg";

// Css styles
import classes from './NewsCard.module.css'

const NewsCard = (props) => {

    const [image, setImage] = useState();
    const [topicColor, setTopicColor] = useState();

    useEffect(() => {
        switch(props.topic) {
            case 'food':
                setTopicColor("#06b6d4")
                setImage(Food);
                break;
            case 'travel':
                setTopicColor("#dc2626");
                setImage(Travel);
                break;
            case 'technology':
                setTopicColor("#020617");
                setImage(Tech);
                break;
            case 'health':
                setTopicColor("#16a34a");
                setImage(Health);
                break;
            case 'business':
                setTopicColor("#f97316");
                setImage(Business);
        }
    }, [])


  return (
    <div className={classes["news-card"]}>
        <img src={image} alt="topic-image" />
        <div className={classes.content}>
            <p className={classes.topic} style={{backgroundColor: topicColor}}>{props.topic}</p>
            <h1>{props.title}</h1>
            <p className={classes.description}>{props.description}</p>
            <h3>{props.author}</h3>
            <h4>{props.date}</h4>
        </div>
    </div>
  )
}

export default NewsCard