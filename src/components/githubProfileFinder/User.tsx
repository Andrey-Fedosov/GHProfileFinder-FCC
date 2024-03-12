import React from "react";
import { githubUserType } from "./types";
import "./styles.css";

type UserPropsType = {
  user: githubUserType;
};

export function User(props: UserPropsType) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    html_url,
    created_at,
  } = props.user;

  const createDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="user photo" />
      </div>
      <div className="name-container">
        <a href={html_url}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createDate.getDate()} ${createDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createDate.toLocaleDateString("en-us", {
            year: "2-digit",
          })}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
