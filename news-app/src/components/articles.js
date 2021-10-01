import React, { useEffect, useState, createRef } from "react";

import useStyles from "./articleStyle";
import "./articles.css";

const Articles = ({ post, activePost, i }) => {

  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop + 200);

  useEffect(() => {
    window.scroll(0, 0);
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activePost && elRefs[activePost]) {
      scrollToRef(elRefs[activePost]);
    }
  }, [i, activePost, elRefs]);

  return (
    <div class="container">
      <div
        ref={elRefs[i]}
        className={i === activePost ? classes.activeCard : classes.card}
      ></div>
      <div class="news-card">
        <img src={post.urlToImage} alt="" />
        <div class="news-card__text-wrapper">
          <h2 class="news-card__title">{post.title}</h2>
          <div class="news-card__post-date">{post.published_at}</div>
          <div class="news-card__details-wrapper">
            <p class="news-card__excerpt">{post.description}</p>
            <a href={post.url} target="_blank" rel="noreferrer">
              Go to Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
