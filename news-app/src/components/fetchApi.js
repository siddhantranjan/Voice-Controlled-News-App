import React, { useEffect, useState } from "react";
import axios from "axios";

import "./fetchApi.css";
import api from "./api.json";
import alanBtn from "@alan-ai/alan-sdk-web";
import Articles from "./articles";

const alanKey =
  "f37af53b7eb4e85f6fbe13f3c6ab02cd2e956eca572e1d8b807a3e2338fdd0dc/stage";

const ShowApi = () => {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(0);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "home") {
          resetWebsite();
        } else if (command === "highlight") {
          setActivePost((prevActivePost) => prevActivePost + 1);
        } else {
          fetchDataFromUrl(command);
          setActivePost(-1);
        }
      },
    });
  }, []);

  function fetchDataFromUrl(topics) {
    axios
      .get(api[topics])
      .then((response) => {
        console.log(response);
        setPosts(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function resetWebsite() {
    setPosts([]);
  }

  return (
    <html className="Post">
      <button onClick={resetWebsite} className="home">
        Home
      </button>
      <div className="news-headlines">
        {posts.length
          ? posts.map((post, i) => (
              <Articles post={post} activePost={activePost} i={i} />
            ))
          : null}
      </div>
      <div className="news-card-cat">
        <button
          onClick={() => fetchDataFromUrl("apple")}
          className="categories"
        >
          Apple
        </button>
        <button
          onClick={() => fetchDataFromUrl("tesla")}
          className="categories"
        >
          Tesla
        </button>
        <button
          onClick={() => fetchDataFromUrl("headlines")}
          className="categories"
        >
          Headlines
        </button>
        <button
          onClick={() => fetchDataFromUrl("wallstreet")}
          className="categories"
        >
          WallStreet
        </button>
        <button
          onClick={() => fetchDataFromUrl("techcrunch")}
          className="categories"
        >
          TechCrunch
        </button>
      </div>
    </html>
  );
};

export default ShowApi;