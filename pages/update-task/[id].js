import { useState } from "react";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import React from "react";
import "reactjs-popup/dist/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUser, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function UpdateTasks(postId) {
  console.log(postId);
  const post = postId.postId;
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");

    // fields check
    if (!title || !content) return setError("All fields are required");

    axios
      .put(`http://localhost:3000/api/tasks/${post._id}`, {
        title,
        content,
        time,
      })
      .then((response) => {
        console.log(response.data);
        response.data;
        //localStorage.setItem("data", JSON.stringify(response.data));

        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleUpdate}
          className="d-flex justify-content-center w-50"
          style={{ flexWrap: "wrap" }}
        >
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
            <label>Number of hours worked</label>
            <input
              type="time"
              name="time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </div>

          <div className={styles.formItem}>
            <button type="submit" className="btn btn-success">
              <span className="me-3">update</span>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ fontSize: 20, color: "white" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.params);
  let data = [];
  try {
    const response = await axios.get(
      `http://localhost:3000/api/tasks/${context.params.id}`
    );
    data = response.data.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      postId: data,
    },
  };
}
