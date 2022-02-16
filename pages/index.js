import PostTask from "../components/PostTask";
//import styles from "../styles/Home.module.css";
import axios from "axios";

import Header from "../components/Header";
//import Footer from "../components/Footer";

export default function Home({ posts }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <div className="card">
          {!posts || posts.length === 0 ? (
            <h2>No added posts</h2>
          ) : (
            <div
              className="d-flex w-100 justify-content-center"
              style={{ flexWrap: "wrap" }}
            >
              {posts.map((post, i) => (
                <PostTask post={post} key={i} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

{
  /* <div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">
      {new Date(post.createdAt).toLocaleDateString()}
    </h6>
    <p className="card-text">{post.content}</p>
    <button type="button" onClick={() => publishPost(post._id)}>
      Update
    </button>
    <button type="button" onClick={() => deletePost(post["_id"])}>
      Delete
    </button>
  </div>
</div>; */
}

export async function getServerSideProps(context) {
  let data = [];
  await axios
    .get("http://localhost:3000/api/tasks")
    .then((response) => {
      console.log(response.data.data);
      data = response.data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      posts: data,
    },
  };
}
