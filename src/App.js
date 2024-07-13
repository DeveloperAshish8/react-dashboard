// import "./App.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import PostList from "./pages/PostList";
import NavBar from "./components/Navbar";
import Login from "./components/Login";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // if (!authenticated) {
  //   return <Login setAuthenticated={setAuthenticated} />;
  // }

  return (
    <div className="flex bg-slate-100">
      <NavBar />
      <div className="w-3/4 p-4 mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
