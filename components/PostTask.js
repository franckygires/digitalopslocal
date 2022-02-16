import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faUser } from "@fortawesome/free-solid-svg-icons";

export default function PostTask({ post }) {
  const handleDelete = ()=> {
      //e.preventDefault();

    axios
      .delete(`http://localhost:3000/api/tasks/${post._id}`)
      .then((response) => {
        //console.log(response.data);
        response.data;
        //localStorage.setItem("data", JSON.stringify(response.data));

        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="card m-4 p-0 w-25"
        style={{
          fontSize: "1.1rem",
          borderRadius: "20px",
          boxShadow: "10px 8px 7px rgba(0,0,0,0.05)",
          borderWidth: 0,
        }}
      >
        <div className="card-body p-0">
          <div
            className="text-white p-2 mb-4 d-flex justify-content-center"
            style={{ backgroundColor: "teal", flexWrap: "wrap" }}
          >
            <h6
              className="card-subtitle mb-2 text-white w-100 my-2"
              style={{ fontSize: "1.1rem" }}
            >
              <div className="bg-info d-inline-block px-2 py-1 rounded-circle me-3">
                <FontAwesomeIcon
                  icon={faUser}
                  className=""
                  style={{ fontSize: "0.9rem" }}
                />
              </div>
              {post.username}
            </h6>
            <h6
              className="card-title"
              style={{ fontSize: "1.1rem" }}
              className="mx-3"
            >
              {post.title}
            </h6>
          </div>
          <div className="p-2">
            <p className="card-text">{post.content}</p>
            <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-end">
              <div>Worked Time : {post.time}</div>
            </h6>
          </div>
          <div className="p-2 d-flex justify-content-center mt-4">
            <a href={`/update-task/${post._id}`} className="mx-3">
              <FontAwesomeIcon
                icon={faEdit}
                style={{ fontSize: 20, color: "green" }}
              />
            </a>
            <FontAwesomeIcon
              icon={faTrash}
              style={{ fontSize: 20, color: "red" }}
              className="mx-3"
              onClick={() => handleDelete(post._id)}
            />
          </div>
        </div>

        {/* Posted by {user.name} */}
      </div>
    </>
  );
}
