import axios from "axios";
import Header from "../components/Header";
export default function Stats({ users, tasks }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        {!users || users.length === 0 ? (
          <h2>No added user</h2>
        ) : (
          <div className="d-flex w-100" style={{ flexWrap: "wrap" }}>
            {users.map((user, i) => (
              <div className="card border-primary d-flex " key={i}>
                <div className="card-body d-flex flex-column">
                  {/* <div className="text-muted"></div> */}
                  <div className="text-capitalize">User Id: {user._id}</div>
                  <div className="text-capitalize">
                    Firstname: {user.firstname}
                  </div>
                  <div className="text-capitalize">
                    Lastname: {user.lastname}
                  </div>
                  <div className="text-capitalize">
                    Nationality: {user.nationality}
                  </div>
                  <div className="text-capitalize">
                    Birthday: {user.birthday}
                  </div>
                  <div className="text-capitalize">
                    Speciality: {user.speciality}
                  </div>
                  <div className="text-capitalize">Email: {user.email}</div>
                  <div className="text-capitalize">Role: {user.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!tasks || tasks.length === 0 ? (
          <h2>No added task</h2>
        ) : (
          <div className="d-flex w-100" style={{ flexWrap: "wrap" }}>
            {tasks.map((task, i) => (
              <div
                className="border border-primary m-4"
                style={{ flexWrap: "wrap" }}
                key={i}
              >
                <div className="card-body d-flex flex-column">
                  <div className="text-capitalize">
                    User Firstname : {task.username}
                  </div>
                  <div className="text-capitalize">
                    Total number of hours worked : {task.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  let data = [];
  await axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      //console.log(response.data.data);
      data = response.data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  let dat = [];
  await axios
    .get("http://localhost:3000/api/tasks")
    .then((response) => {
      //console.log(response.data.data)
      dat = response.data.data;
      //console.log(dat);
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      users: data,
      tasks: dat,
    },
  };
}
