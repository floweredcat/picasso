import React from "react";
import { Main } from "./Pages/Main";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Post } from "./Pages/Post";

function App() {
  return (
    // add store
    <Provider store={store}>
      <Routes>
        <Route path={"picasso"} element={<Main />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Provider>
  );
}

export default App;
