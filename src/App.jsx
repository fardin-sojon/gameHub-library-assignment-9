import React, { useContext } from "react";
import { AuthContext } from "./Provider/AuthContext";
import Loading from "./Components/Loading";
import Router from "./Routes/Router";

function App() {
  const { loading } = useContext(AuthContext);

  return (
    <>
      {loading && <Loading />}
      <Router />
    </>
  );
}

export default App;
