import React, { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import userApi from "./api/userApi";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    userApi
      .getById(1)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>1</h1>
      <p>{user.id} - {user.name} - {user.email}</p>
    </div>
  );
}

export default App;
