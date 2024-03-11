import React, { useState, ChangeEvent, useEffect } from "react";
import "./styles.css";
import { githubUserType } from "./types";
import { User } from "./User";

export function GithubProfileFinder() {
  const [userName, setUserName] = useState("Andrey-Fedosov");
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function fetchGitHubData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data: githubUserType = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }

    console.log(data);
  }

  function handleSubmit() {
    fetchGitHubData();
  }

  useEffect(() => {
    fetchGitHubData();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username"
          value={userName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUserName(e.currentTarget.value);
          }}
        />
        <button onClick={handleSubmit}>find profile</button>
      </div>
      <div className="user-profile-box ">
        <p>Github {userName} profile</p>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
}
