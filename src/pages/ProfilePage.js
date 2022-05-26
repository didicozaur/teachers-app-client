import { React } from "react";

const profileImg = require("../images/person-placeholder.png");

const ProfilePage = (props) => {
  return (
    <div>
      <div>
        <h1>Welcome</h1>
        <img
          scr={profileImg}
          alt="person-placeholder"
          style={{ width: "100px", height: "100px", borderRadius: "50px" }}
        />
      </div>
    </div>
  );
};
export default ProfilePage;
