import React from "react";

function Card() {
  return (
    <div className="profile card">
      <div className="profileHeader">
        <img src="https://i.pravatar.cc/" alt="profilepic"></img>

        <div className="edit">
          <div className="box-detail">
            <h2>Sagar Jha</h2>
            <span>@SteriodMen</span>
          </div>
          <span>
            <i class="fas fa-ellipsis-v"></i>
          </span>
        </div>
      </div>
      <div className="postBody">
        <h2>I want to Visit Rome</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not o
        </p>
      </div>
      <div className="ranking">
        <div>
          <button>
            <i class="far fa-thumbs-up"></i>
          </button>
          <p>20 Likes</p>
        </div>
        <div>
          <button>
            <i class="far fa-thumbs-down"></i>
          </button>
          <p>20 Dislikes</p>
        </div>
        <div></div>
        <div>
          <span>
            <i class="far fa-hourglass"></i>
          </span>
          <p>1st Jan</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
