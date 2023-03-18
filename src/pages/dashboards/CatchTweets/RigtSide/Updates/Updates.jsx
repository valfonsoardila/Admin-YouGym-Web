import React from "react";
import {BackGround, SubBackGround, Notification, ContainerInfo} from "./UpdateStyles";
import users  from "../../Data/tweets";

const Updates = () => {
  return (
    <BackGround>
      {
        users.map((user) => {
          return (
            <SubBackGround key={user.id}>
              <img src={user.user.profile_image_url ?? "./no photo.jfif"} alt="profile" />
              <Notification>
                <ContainerInfo>
                  <span>{user.user.name}</span> <br />
                  <span> {user.text}</span>
                </ContainerInfo> 
              </Notification>
            </SubBackGround>
          );
        })
      }
    </BackGround>
  );
};

export default Updates;
