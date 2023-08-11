import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BodyCard from "../Helper/BodyCard/BodyCard";

import classes from "./SpecificBlog.module.css";

import {
  TECH_TITLE,
  TRAVEL_TITLE,
  HEALTH_TITLE,
  TECH_IMG,
  TRAVEL_IMG,
  HEALTH_IMG,
} from "./ImageData";

const SpecificBlog = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const { topic, index } = useParams();

  useEffect(() => {
    switch (topic) {
      case "Technology":
        setTitle(TECH_TITLE[+index]);
        setImage(TECH_IMG[+index]);
        break;
      case "Travel":
        setTitle(TRAVEL_TITLE[+index]);
        setImage(TRAVEL_IMG[+index]);
        break;
      case "Health":
        setTitle(HEALTH_TITLE[+index]);
        setImage(HEALTH_IMG[+index]);
        break;
    }
  });

  return (
    <BodyCard className={classes.blog}>
      <img src={image} alt="picture" />
      <h1>{title}</h1>
      <h3>Title 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem
        nulla pharetra diam. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget. Lacus vel facilisis volutpat est. Etiam
        dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Adipiscing tristique risus nec feugiat in fermentum. Et magnis dis
        parturient montes nascetur ridiculus mus mauris. Neque viverra justo nec
        ultrices dui sapien. Morbi non arcu risus quis. Diam maecenas sed enim
        ut sem. Scelerisque mauris pellentesque pulvinar pellentesque
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem
        nulla pharetra diam. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget. Lacus vel facilisis volutpat est. Etiam
        dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Adipiscing tristique risus nec feugiat in fermentum. Et magnis dis
        parturient montes nascetur ridiculus mus mauris. Neque viverra justo nec
        ultrices dui sapien. Morbi non arcu risus quis. Diam maecenas sed enim
        ut sem. Scelerisque mauris pellentesque pulvinar pellentesque
      </p>
      <h3>Title 2</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem
        nulla pharetra diam. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget. Lacus vel facilisis volutpat est. Etiam
        dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Adipiscing tristique risus nec feugiat in fermentum. Et magnis dis
        parturient montes nascetur ridiculus mus mauris. Neque viverra justo nec
        ultrices dui sapien. Morbi non arcu risus quis. Diam maecenas sed enim
        ut sem. Scelerisque mauris pellentesque pulvinar pellentesque
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem
        nulla pharetra diam. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget. Lacus vel facilisis volutpat est. Etiam
        dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Adipiscing tristique risus nec feugiat in fermentum. Et magnis dis
        parturient montes nascetur ridiculus mus mauris. Neque viverra justo nec
        ultrices dui sapien. Morbi non arcu risus quis. Diam maecenas sed enim
        ut sem. Scelerisque mauris pellentesque pulvinar pellentesque
      </p>
      <h3>Title 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem
        nulla pharetra diam. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget. Lacus vel facilisis volutpat est. Etiam
        dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Adipiscing tristique risus nec feugiat in fermentum. Et magnis dis
        parturient montes nascetur ridiculus mus mauris. Neque viverra justo nec
        ultrices dui sapien. Morbi non arcu risus quis. Diam maecenas sed enim
        ut sem. Scelerisque mauris pellentesque pulvinar pellentesque
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem
        nulla pharetra diam. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget. Lacus vel facilisis volutpat est. Etiam
        dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Adipiscing tristique risus nec feugiat in fermentum. Et magnis dis
        parturient montes nascetur ridiculus mus mauris. Neque viverra justo nec
        ultrices dui sapien. Morbi non arcu risus quis. Diam maecenas sed enim
        ut sem. Scelerisque mauris pellentesque pulvinar pellentesque
      </p>
      <h3>Conclusion</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem
        nulla pharetra diam. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus at augue eget. Lacus vel facilisis volutpat est. Etiam
        dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Adipiscing tristique risus nec feugiat in fermentum. Et magnis dis
        parturient montes nascetur ridiculus mus mauris. Neque viverra justo nec
        ultrices dui sapien. Morbi non arcu risus quis. Diam maecenas sed enim
        ut sem. Scelerisque mauris pellentesque pulvinar pellentesque
      </p>

    </BodyCard>
  );
};

export default SpecificBlog;
