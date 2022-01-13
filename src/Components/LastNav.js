import React from "react";
import Profile from "./Profile";
import PostTile from "./PostTile";

function LastNav() {
  return (
    <div className="scroll">
      <div className="more">
        <div className="tileHeader">
          <span>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
          <p>Profile</p>
        </div>
        <Profile />
      </div>
      <div className="more">
        <div className="tileHeader">
          <span>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
          <p>Somrthing You Might Like...</p>
        </div>
        <PostTile />
      </div>
    </div>
  );
}

export default LastNav;
