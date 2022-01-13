import React from "react";

function Profile() {
  return (
    <div className="profile">
      <div className="profileHeader">
        <img src="https://i.pravatar.cc/" alt="profilepic"></img>

        <div className="edit">
          <div className="box-detail">
            <h2>Sagar Jha</h2>
            <span>@SteriodMen</span>
          </div>
          <span>
            <i class="fas fa-edit    "></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
