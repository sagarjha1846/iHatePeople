import React from "react";
import Card from "./Card";

function Content() {
  return (
    <div className="main">
      <div className="content">
        <div className="header">
          <h2>#Post</h2>
        </div>
        <div className="header">
          <button className="active">
            <span>
              <i class="far fa-calendar"></i>
            </span>
            Recent
          </button>
          <button>
            <span>
              <i class="fas fa-poll"></i>
            </span>
            Trending
          </button>
          <button>
            <span>
              <i class="far fa-heart"></i>
            </span>
            Liked
          </button>
          <button>
            <span>
              <i class="fas fa-heart-broken"></i>
            </span>
            Disliked
          </button>
        </div>
      </div>
      <div className="posts">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Content;
