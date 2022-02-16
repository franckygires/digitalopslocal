import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function AddPost() {

  const [user, setUser] = useState("");
    useEffect(() => {
      if (!user) {
        const users = JSON.parse(localStorage.getItem("data"));
       // console.log(users);
        setUser(users);
      }
  }, [user]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  //const [username, setUsername] = useState("");

  const handleTask = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");

    // fields check
      if (!title || !content) return setError("All fields are required");
      
    const username = user.name;
    console.log("username: ", username);

      axios
        .post("https://digitalops.herokuapp.com/api/tasks", {
          title,
          username,
          content,
        })
        .then((response) => {
          console.log(response.data);
          response.data;
          window.location = "/";
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleTask} className={styles.form}>
          {error ? (
            <div className={styles.formItem}>
              <h3 className={styles.error}>{error}</h3>
            </div>
          ) : null}
          {message ? (
            <div className={styles.formItem}>
              <h3 className={styles.message}>{message}</h3>
            </div>
          ) : null}
          <div className={styles.formItem}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="title"
            />
          </div>
          <div className={styles.formItem}>
            <label>Content</label>
            <textarea
              name="content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Post content"
            />
          </div>
          <div className={styles.formItem}>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}
