import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "../Notes";
import CreateNote from "./CreateNote";

function App() {
  return (
    <div>
      <Header />
      {Notes.map(CreateNote)}
      <Footer />
    </div>
  );
}

export default App;
